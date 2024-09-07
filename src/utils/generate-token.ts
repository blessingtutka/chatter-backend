import jwt from 'jsonwebtoken';
import authConfig from '../config/auth.config';
import { User } from '../config/db.config';

export const generateToken = (user: User): string => {
  return jwt.sign(
    { userId: user.userId, email: user.email },
    authConfig.jwt.secret,
    {
      expiresIn: '2d',
    },
  );
};
