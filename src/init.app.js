import connectDB from '../db/connection.js';
import productRouter from './modules/product/product.router.js';
const initApp = (app, express) => {
  app.use(express.json());
  connectDB();
  app.use('/products', productRouter);
  app.use('*', (req, res) => {
    return res.status(404).json({ msg: 'User Not Found' });
  });
};

export default initApp;
