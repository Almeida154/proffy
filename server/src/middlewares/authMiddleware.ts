import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface TokenPayload {
  id: string;
  iat: number;
  exp: number;
}

export default function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res
      .status(401)
      .json({ message: 'Not authorized by the middleware' });
  }

  const token = authorization.replace('Bearer', '').trim();

  try {
    const secret: string = process.env.JWT_SECRET || 'default_secret';
    const data = jwt.verify(token, secret);

    const { id } = data as TokenPayload;

    req.user_id = id;

    return next();
  } catch {
    return res
      .status(401)
      .json({ message: 'Not authorized by the middleware' });
  }
}
