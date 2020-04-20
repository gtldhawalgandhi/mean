import FileManager from '../src/utils/lib';

// You can either mock here on inside src/__mocks__ folder
jest.mock(
  '../src/utils/lib',
  () =>
    class FileManager {
      static read(filename) {
        return Promise.resolve('Dummy Data');
      }
    }
);

jest.mock(
  '../src/utils/logger',
  () =>
    class Logger {
      silly() {}

      debug() {}

      info() {}

      warn() {}

      error() {}
    }
);

beforeAll(() => {
  process.env.NODE_ENV = 'production';
});

it('test my readMyFile', async () => {
  const result = await FileManager.read('whatever');
  expect(result).toBe('Dummy Data');
});
