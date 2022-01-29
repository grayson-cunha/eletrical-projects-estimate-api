import dotenv from 'dotenv';

dotenv.config();

import express from 'express';
import cors from 'cors';
import '../config/database';
import dbInit from '../database';

dbInit();
const app: express.Application = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT, () => {
  console.log('App listening on port: ', process.env.PORT);
});
