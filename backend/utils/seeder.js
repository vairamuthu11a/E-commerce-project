const products = require("../data/products.json");
const Product = require("../model/productModel");
const connectDatabase = require("../config/connectDatabase");
const dotenv = require("dotenv");
dotenv.config({ path: "backend/config/config.env" })

connectDatabase();

const seedProducts = async () => {
    try {
        await Product.deleteMany()
        console.log("Product deleted!");
        await Product.insertMany(products);
        console.log("All Product Added!");
    } catch {
        console.log(error.message);

    }
}
seedProducts();