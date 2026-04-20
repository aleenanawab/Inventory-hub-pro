const validateRegister = (req, res, next) => {
  const { name, email, password } = req.body;
  const errors = [];

  if (!name || name.trim().length < 2) {
    errors.push('Name is required and must be at least 2 characters');
  }

  if (!email || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    errors.push('Please provide a valid email');
  }

  if (!password || password.length < 6) {
    errors.push('Password must be at least 6 characters');
  }

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      errors
    });
  }

  next();
};

const validateProduct = (req, res, next) => {
  const { name, description, price, category, quantity } = req.body;
  const errors = [];

  if (!name || name.trim().length < 2) {
    errors.push('Product name is required and must be at least 2 characters');
  }

  if (!description || description.trim().length < 10) {
    errors.push('Description must be at least 10 characters');
  }

  if (!price || price < 0 || isNaN(price)) {
    errors.push('Valid price is required');
  }

  if (!category) {
    errors.push('Category is required');
  }

  if (quantity !== undefined && (quantity < 0 || isNaN(quantity))) {
    errors.push('Quantity must be a valid non-negative number');
  }

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      errors
    });
  }

  next();
};

module.exports = { validateRegister, validateProduct };