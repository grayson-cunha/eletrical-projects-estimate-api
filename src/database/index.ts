import Customer from '../app/models/customer';

const isDev = process.env.NODE_ENV === 'development';

const dbInit = () => {
  Customer.sync({ alter: isDev });
};

export default dbInit;
