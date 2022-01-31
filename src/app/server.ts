import dotenv from 'dotenv';

dotenv.config();

import express, { Application } from 'express';
import cors from 'cors';

import '../config/database';
import dbInit from '../database';
import routes from './routes';

dbInit();
const app: Application = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(process.env.PORT, () => {
  console.log('App listening on port: ', process.env.PORT);
});

export default app;
