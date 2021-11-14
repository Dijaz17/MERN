const AuthorController = require('../controllers/author.controller');

module.exports = app => {
    app.get("/api/allAuthors/", AuthorController.findAllAuthors);
    app.get("/api/authors/:_id", AuthorController.findSingleAuthor);
    app.post("/api/authors/new", AuthorController.createNewAuthor);
    app.patch("/api/authors/update/:_id", AuthorController.updateExistingAuthor);
    app.delete("/api/authors/delete/:_id", AuthorController.deleteAuthor);
}