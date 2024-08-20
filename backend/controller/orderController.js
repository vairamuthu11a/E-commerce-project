const orderModel = require("../model/orderModel");
const productModel = require("../model/productModel");

// Create Order - /api/v1/order
exports.createOrder = async (req, res, next) => {

  const cartItems = req.body;
  const amount = Number(cartItems.reduce((acc, item) => (acc + item.product.price * item.qty), 0)).toFixed(2);
  const status = "Pending";
  const order = await orderModel.create({ cartItems, amount, status })

  // Updating product Stocks

  cartItems.forEach(async (item) => {
    const product = await productModel.findById(item.product._id);
    product.stock = product.stock - item.qty;
    await product.save();

  });



  res.json({
    success: true,
    order

  })
}

