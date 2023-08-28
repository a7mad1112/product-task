import productModel from '../../../db/models/product.model.js';

export const addProduct = async (req, res) => {
  try {
    const product = await productModel.create(req.body);
    return res.json({ msg: 'success', product });
  } catch (err) {
    return res.json({ msg: 'Error, Cannot Add Product', err });
  }
};

export const getAll = async (req, res) => {
  try {
    const products = await productModel.find();
    return res.json({ msg: 'success', products });
  } catch (err) {
    return res.json({ msg: 'Error, Cannot Retrieve Products', err });
  }
};
