import Address from '../app/models/address';
import Client from '../app/models/client';

const isDev = process.env.NODE_ENV === 'development';

const initializeDatabaseTables = () => {
  Address.sync({ alter: isDev, force: isDev });
  Client.sync({ alter: isDev, force: isDev });
};

export default initializeDatabaseTables;
