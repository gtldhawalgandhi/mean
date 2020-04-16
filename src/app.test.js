import readMyFile from './app';

jest.mock(
  './lib',
  () =>
    class FileManager {
      static read(filename) {
        return Promise.resolve('Dummy Data2');
      }
    }
);

it('test my readMyFile', async () => {
  const result = await readMyFile('whatever');
  expect(result).toBe('Dummy Data');
});
