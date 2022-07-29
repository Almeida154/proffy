import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import db from '../database/connection';

class AuthController {
  async login(req: Request, res: Response) {
    const { email, password } = req.body;

    const user = await db('USERS').where({ email }).first();

    if (!user) {
      return res.status(403).json({ message: 'Invalid credentials' });
    }

    const isValidPassword = await bcrypt.compare(
      password,
      user.password
    );

    if (!isValidPassword) {
      return res.status(403).json({ message: 'Invalid credentials' });
    }

    const secret: string = process.env.JWT_SECRET || 'default_secret';

    const token = jwt.sign({ user_id: user.id }, secret, {
      expiresIn: '30d',
    });

    delete user.password;

    return res.status(200).json({ user, token });
  }
}

export default new AuthController();
