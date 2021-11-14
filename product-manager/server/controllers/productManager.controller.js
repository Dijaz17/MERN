const ProductManager = require('../models/productManager.model');

module.exports.findAllProducts = (req,res) => {
    ProductManager.find({})
        .then(allProducts => res.json({ results: allProducts }))
        .catch(err => res.json({ message: 'error contacting DB', error: err }))
}

module.exports.findSingleProduct = (req,res) => {
    ProductManager.findOne({_id: req.params._id})
        .then(singleProduct => res.json({ results: singleProduct }))
        .catch(err => res.json({ message: 'error contacting DB', error: err }))
}

module.exports.createNewProduct = (req,res) => {
    ProductManager.create(req.body)
        .then(newProduct => res.json({ results: newProduct }))
        .catch(err => res.json({ message: 'error contacting DB', error: err }))
}

module.exports.updateExistingProduct = (req,res) => {
    ProductManager.findOneAndUpdate({_id: req.params._id}, req.body, {new:true,runValidators:true})
        .then(updatedProduct => res.json({ results: updatedProduct }))
        .catch(err => res.json({ message: 'error contacting DB', error: err }))
}

module.exports.deleteProduct = (req,res) => {
    ProductManager.deleteOne({ _id: req.params._id })
        .then(results => res.json({ results: results }))
        .catch(err => res.json({ message: 'error contacting DB', error: err }))
}