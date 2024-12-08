import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable');
}

const connectDb = async () => {
    const connectionState = mongoose.connection.readyState;

  if (connectionState === 1) {
      console.log('Already connected to the database');
      return;
  }

  if (connectionState === 2) {
      console.log('Connecting to the database...');
      return;
  }

  try {
    await mongoose.connect(MONGODB_URI!, {
      dbName: 'nela',
        bufferCommands: false,
    })
    console.log('Connected to the database')
  } catch (error) {
      console.log('Error in connecting to the database:', error);
      throw new Error('Error in connecting to the database');
  }
}

export default connectDb;