import express from 'express';
import * as productController from './product.controller.js';
const app = express();
app.post('/', productController.addProduct);

export default app;
