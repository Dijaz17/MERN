const ProductController = require('../controllers/productManager.controller');

module.exports = app => {
    app.get("/api/allProducts/", ProductController.findAllProducts);
    app.get("/api/products/:_id", ProductController.findSingleProduct);
    app.post("/api/products/new", ProductController.createNewProduct);
    app.patch("/api/products/update/:_id", ProductController.updateExistingProduct);
    app.delete("/api/products/delete/:_id", ProductController.deleteProduct);
}