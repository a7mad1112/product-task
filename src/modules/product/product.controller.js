import productModel from '../../../db/models/product.model.js';

export const addProduct = async (req, res) => {
  const product = await productModel.create(req.body);
  return res.json({ msg: 'success', product });
};
