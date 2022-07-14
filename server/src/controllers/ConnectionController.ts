import { Request, Response } from 'express';
import db from '../database/connection';

class ConnectionController {
  async index(req: Request, res: Response) {
    const connectionsCount = await db('CONNECTIONS').count(
      '* as total'
    );
    const { total } = connectionsCount[0];

    return res.json({ total });
  }

  async create(req: Request, res: Response) {
    const { user_id } = req.body;

    await db('CONNECTIONS').insert({
      user_id,
    });

    return res.status(201).json({ message: 'Ok' });
  }
}

export default new ConnectionController();
