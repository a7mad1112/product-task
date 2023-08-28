import mongoose from 'mongoose';

const connectDB = async () => {
  return await mongoose
    .connect('mongodb://127.0.0.1:27017/node1')
    .then((res) => {
      console.log('Database Connected');
    })
    .catch((err) => {
      console.log('Error, Cannot Connect to Database', err);
    });
};

export default connectDB;
