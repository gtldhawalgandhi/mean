import dotenv from 'dotenv';

dotenv.config({ path: `${__dirname}/.env` });

const config = {
  dir: process.env.dir,
  env: process.env.NODE_ENV,
  logfile: process.env.logfilename,
};

export default config;
