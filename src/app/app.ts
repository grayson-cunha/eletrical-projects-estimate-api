import dotenv from 'dotenv';

dotenv.config();

import express, { Application } from 'express';
import cors from 'cors';
import { Server } from 'http';
import helmet from 'helmet';
import compression from 'compression';

import sequelizeConnection from '../config/database';
import initializeDatabaseTables from '../database';
import routes from './routes';

class App {
  private express: Application;
  private server!: Server;

  constructor() {
    this.express = express();
    this.express.use(compression());
    this.express.use(express.json());
    this.express.use(cors());
    this.express.use(helmet());
    this.express.use(routes);
  }

  getExpressInstance() {
    return this.express;
  }

  async start(): Promise<void> {
    this.server = this.express.listen(process.env.PORT);

    if (process.env.NODE_ENV !== 'test') {
      console.log('App listening on port: ', process.env.PORT);
    }

    initializeDatabaseTables();
  }

  async stop() {
    this.server.close();
    await sequelizeConnection.close();
  }
}

export default new App();
