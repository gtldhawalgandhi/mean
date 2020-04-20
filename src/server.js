import app from './app';
import DB from './utils/db_conn';

const start = async () => {
  await DB();
  const port = 4444;

  app.listen(port, '0.0.0.0', () => {
    console.log(`Starting express server on port ${port}`);
  });
};

(async () => {
  await start();
})();
