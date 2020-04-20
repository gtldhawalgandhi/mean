import jwt from 'jsonwebtoken';
import Express from 'express';
import fileupload from 'express-fileupload';
import personRouter from './routes/person';
import { register, login } from './controllers/person';

const app = new Express();

// app.use(fileupload());
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

const tokenMiddleware = (req, res, next) => {
  const token = req.headers && req.headers.authorization;
  if (token) {
    const decodedJWTData = jwt.verify(token, 'serverSecretKey');
    req.user = decodedJWTData;
    next();
  } else {
    res.status(404).json({
      err: 'unauthorized access',
    });
  }
};

app.use('/person', tokenMiddleware, fileupload(), personRouter);

app.post('/login', async (req, res) => {
  if (!req.body.email && !req.body.password) {
    res.status(401).json({
      err: 'Email and Password are required',
    });
  }
  const token = await login(req.body);
  if (token) {
    res.header('authorization', token).json({
      status: 'ok',
    });
    return;
  }
  res.status(401).json({
    err: 'Login failed!',
  });
});

app.post('/register', async (req, res) => {
  try {
    if (!req.body.email && !req.body.password) {
      res.status(401).json({
        err: 'Email and Password are required',
      });
      return;
    }
    await register(req.body);
    res.json({ status: 'ok' });
  } catch (err) {
    res.end(JSON.stringify(err));
  }
});

export default app;
