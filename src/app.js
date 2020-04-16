// import 'regenerator-runtime/runtime';

import FileManager, { readFile } from './lib';
import Logger from './logger';
import config from './config';

const logger = new Logger('Root', 'app.js');

// Async await ??????

const readMyFile = async (filename) => {
  logger.debug('readMyFile');
  try {
    // Style1 -> Calling imported functions
    // const data = await readFile(filename);

    // Style 2 -> Calling static method on imported Class
    const data = await FileManager.read(filename);

    logger.warn(data);
    return data;
  } catch (err) {
    logger.error(`Error while reading file: ${err}`);
  }
};

export default readMyFile;
// Reading from __dirname
// readMyFile(__dirname + '/package.json');

// Reading from environment variables;
// readMyFile(`${config.dir}/package.json`);
