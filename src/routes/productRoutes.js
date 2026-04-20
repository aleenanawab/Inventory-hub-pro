const express = require('express');
const router = express.Router();
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/productController');
const { protect } = require('../middlewares/authMiddleware');
const { validateProduct } = require('../middlewares/validationMiddleware');

// All product routes are protected
router.use(protect);

router.route('/')
  .get(getProducts)
  .post(validateProduct, createProduct);

router.route('/:id')
  .get(getProduct)
  .put(validateProduct, updateProduct)
  .delete(deleteProduct);

module.exports = router;