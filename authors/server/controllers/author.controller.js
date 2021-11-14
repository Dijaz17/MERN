const Author = require('../models/author.model');

module.exports.findAllAuthors = (req,res) => {
    Author.find({})
        .then(allAuthors => res.json({ results: allAuthors }))
        .catch(err => res.json({ message: 'error contacting DB', error: err }))
}

module.exports.findSingleAuthor = (req,res) => {
    Author.findOne({_id: req.params._id})
        .then(singleAuthor => res.json({ results: singleAuthor }))
        .catch(err => res.json({ message: 'error contacting DB', error: err }))
}

module.exports.createNewAuthor = (req,res) => {
    Author.create(req.body)
        .then(newAuthor => res.json({ results: newAuthor }))
        .catch(err => res.json({ message: 'error contacting DB', error: err }))
}

module.exports.updateExistingAuthor = (req,res) => {
    Author.findOneAndUpdate({_id: req.params._id}, req.body, {new:true,runValidators:true})
        .then(updatedAuthor => res.json({ results: updatedAuthor }))
        .catch(err => res.json({ message: 'error contacting DB', error: err }))
}

module.exports.deleteAuthor = (req,res) => {
    Author.deleteOne({ _id: req.params._id })
        .then(results => res.json({ results: results }))
        .catch(err => res.json({ message: 'error contacting DB', error: err }))
}