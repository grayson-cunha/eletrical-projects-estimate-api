import dotenv from 'dotenv';

const dotenvResult = dotenv.config();

if (dotenvResult.error) {
  throw dotenvResult.error;
}

import express from 'express';
import cors from 'cors';

const app: express.Application = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT, () => {
  console.log('App listening on port: ', process.env.PORT);
});
