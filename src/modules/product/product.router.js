import express from 'express';
import * as productController from './product.controller.js';
const app = express();
app.post('/', productController.addProduct);
app.get('/', productController.getAll);
app.delete('/:id', productController.deleteProduct);

export default app;
