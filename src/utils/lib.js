import fs from 'fs';

// const fs = require('fs');

class FileManager {
  static read(filename) {
    // fs.readFile(filename, (err, data) => {
    //     if (err) {
    //         return err;
    //     } else {
    //         return data;
    //     }
    // } )

    // try {
    //      const data = fs.readFileSync(filename, {encoding: 'utf-8'})
    //      return data;
    // } catch (err) {
    //     return err
    // }

    // Async -> Promise
    // return new Promise( (resolve, reject) => {
    //     fs.readFile(filename, {encoding: 'utf-8'}, (err, data) => {
    //         if (err) {
    //            reject(err);
    //         } else {
    //             resolve(data);
    //         }
    //     })
    // } );

    return new Promise((resolve, reject) => {
      const readStream = fs.createReadStream(filename);
      readStream.on('data', (data) => {
        resolve(data);
      });
      readStream.on('error', (err) => {
        reject(err);
      });
    });
  }
}

export function readFile(filename) {
  // fs.readFile(filename, (err, data) => {
  //     if (err) {
  //         return err;
  //     } else {
  //         return data;
  //     }
  // } )

  // try {
  //      const data = fs.readFileSync(filename, {encoding: 'utf-8'})
  //      return data;
  // } catch (err) {
  //     return err
  // }

  // Async -> Promise
  // return new Promise( (resolve, reject) => {
  //     fs.readFile(filename, {encoding: 'utf-8'}, (err, data) => {
  //         if (err) {
  //            reject(err);
  //         } else {
  //             resolve(data);
  //         }
  //     })
  // } );

  return new Promise((resolve, reject) => {
    const readStream = fs.createReadStream(filename, { encoding: 'utf-8' });
    readStream.on('data', (data) => {
      resolve(data);
    });
    readStream.on('error', (err) => {
      reject(err);
    });
  });
}

export default FileManager;

// export default readFile;
// module.exports = readFile
