import Client from '../app/models/client';

const isDev = process.env.NODE_ENV === 'development';

const dbInit = () => {
  Client.sync({ alter: isDev });
};

export default dbInit;
