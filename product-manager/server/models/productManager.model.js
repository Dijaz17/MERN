const mongoose = require("mongoose");

const ProductManagerSchema = new mongoose.Schema({
	title: String,
    price: Number,
    description: String
});

const ProductManager = mongoose.model("ProductManager", ProductManagerSchema);

module.exports = ProductManager;