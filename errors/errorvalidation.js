// middlewares/validateProduct.js
const { ValidationError } = require('../utils/errors');

const validateProduct = (req, res, next) => {
  const { name, description, price, category, inStock } = req.body;

  if (!name || !description || !price || !category || inStock === undefined) {
    throw new ValidationError('All fields (name, description, price, category, inStock) are required.');
  }

  if (typeof price !== 'number' || price < 0) {
    throw new ValidationError('Price must be a positive number.');
  }

  next();
};

module.exports = validateProduct;
