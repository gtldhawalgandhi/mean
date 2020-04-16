import winston from 'winston';
import config from './config';

/*
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  verbose: 4,
  debug: 5,
  silly: 6
*/

export default class Logger {
  constructor(moduleName, appfile) {
    this.level = config.env === 'production' ? 'info' : 'silly';
    this.prefix = `${moduleName}[${appfile}]`;
    this.logFile = config.logfile;
    this.setLogger();
  }

  setLogger() {
    this.logger = winston.createLogger({
      level: this.level,
      format: winston.format.combine(winston.format.colorize(), winston.format.simple()),
      transports: [
        new winston.transports.Console(),
        new winston.transports.File({
          filename: this.logFile,
          format: winston.format.combine(winston.format.json()),
        }),
      ],
    });
  }

  silly(arg) {
    this.logger.silly(`${this.prefix}: ${arg}`);
  }

  debug(arg) {
    this.logger.debug(`${this.prefix}: ${arg}`);
  }

  info(arg) {
    this.logger.info(`${this.prefix}: ${arg}`);
  }

  warn(arg) {
    this.logger.warn(`${this.prefix}: ${arg}`);
  }

  error(arg) {
    this.logger.error(`${this.prefix}: ${arg}`);
  }
}

// const logger = winston.createLogger({
//   level: config.env === 'production' ? 'error' : 'silly',
//   format: winston.format.combine(
//     winston.format.colorize(),
//     winston.format.simple(),
//   ),
//   transports: [
//     new winston.transports.Console(),
//     new winston.transports.File({
//       filename: 'app.log',
//       format: winston.format.combine(
//         winston.format.json(),
//       ),
//     }),
//   ],
// });

// export default logger;
