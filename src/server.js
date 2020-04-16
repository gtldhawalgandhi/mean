import Express from 'express';

const expressApp = new Express();
const port = 4444;

expressApp.get('/', (req, res) => {
  res.end('Test Ok');
});

expressApp.listen(port, '0.0.0.0', () => {
  console.log(`Starting express server on port ${port}`);
});
