// import 'regenerator-runtime/runtime';

import FileManager, { readFile } from './lib';
import logger from './logger';
import config from './config';

// Async await ??????

const readMyFile = async (filename) => {
  try {
    // Style1 -> Calling imported functions
    // const data = await readFile(filename);

    // Style 2 -> Calling static method on imported Class
    const data = await FileManager.read(filename);

    logger.warn(data);
  } catch (err) {
    logger.error(`Error while reading file: ${err}`);
  }
};

// Reading from __dirname
// readMyFile(__dirname + '/package.json');

// Reading from environment variables;
readMyFile(`${config.dir}/package.json`);
