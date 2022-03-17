import mongoose from 'mongoose';

const connectedStateMongoose = 1;

class Database {
  async connect(): Promise<boolean> {
    const dbUrl = process.env.DB_URL as string;

    await mongoose.connect(dbUrl);

    return mongoose.connection.readyState === connectedStateMongoose;
  }

  async disconnect(): Promise<void> {
    await mongoose.disconnect();
  }
}

export default new Database();
