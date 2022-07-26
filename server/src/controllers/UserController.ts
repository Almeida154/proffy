import { Request, Response } from 'express';
import bcrypt from 'bcrypt';

import db from '../database/connection';
import validateEmail from '../utils/validateEmail';

class UserController {
  async create(req: Request, res: Response) {
    const { name, lastname, email, password } = req.body;

    const trx = await db.transaction();

    try {
      const userExists = await trx('USERS')
        .where({
          email,
        })
        .first();

      if (userExists)
        return res
          .status(409)
          .json({ message: 'Email already exists', field: 'email' });

      if (!validateEmail(email))
        return res.status(409).json({ message: 'Invalid email' });

      const insertedUser = await trx('USERS')
        .returning('*')
        .insert({
          name: name + ' ' + lastname,
          email,
          password: bcrypt.hashSync(password, 8),
        });

      await trx.commit();

      return res.status(200).json({
        message: 'Everything is ok',
        user: insertedUser,
      });
    } catch {
      return res.status(500).json({
        message: 'An error has happend on user creating',
      });
    }
  }
}

export default new UserController();
