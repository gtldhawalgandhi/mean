// import 'regenerator-runtime/runtime';

import FileManager, { readFile } from './lib';

// Async await ??????

const readMyFile = async (filename) => {
  try {
    // Style1 -> Calling imported functions
    // const data = await readFile(filename);

    // Style 2 -> Calling static method on imported Class
    const data = await FileManager.read(filename);

    console.log(data);
  } catch (err) {
    console.log(`Error while reading file: ${err}`);
  }
};

// Reading from __dirname
// readMyFile(__dirname + '/package.json');

// Reading from environment variables;
readMyFile(`${process.env.dir}/package.json`);
const a = 'hell';
const obj = {
  [a]: 'world',
};
console.log(obj);
