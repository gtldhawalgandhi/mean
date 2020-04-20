import dotenv from 'dotenv';
dotenv.config({ path: __dirname + '/.env' });

export const config = {
  dir: process.env.DIR,
  env: process.env.NODE_ENV,
  db: process.env.DB,
};
