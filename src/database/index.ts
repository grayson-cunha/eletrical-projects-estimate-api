import Client from '../app/models/client';

const isDev = process.env.NODE_ENV === 'development';

const initializeDatabaseTables = () => {
  Client.sync({ alter: isDev });
};

export default initializeDatabaseTables;
