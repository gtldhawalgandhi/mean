// const FileManager = jest.genMockFromModule('./lib');

// You can either mock here or inside __tests__/lib.js
export default class FileManager {
  static read() {
    return Promise.resolve('DATA');
  }
}

export function readFile() {}
