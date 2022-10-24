const router = require('express').Router();
let Books = require('../models/books.model');

router.route('/').get((req, res) => {
    Books.find()
        .then(books => res.json(books)) 
        .catch(err => res.status(400).json('Error: ' + err));
}); //finds all books in the database or returns an error

router.route('/add').post((req, res) => {
    const ISBN = req.body.ISBN;
    const title = req.body.title;
    const author = req.body.author;
    const publisher = req.body.publisher;

    const newBooks = new Books({
        ISBN,
        title,
        author,
        publisher,
    });

    newBooks.save()
        .then(() => res.json('Books added!'))
        .catch(err => res.status(400).json('Error: ' + err));
}); //adds a new book to the database or returns an error

router.route('/:id/').get((req, res) => {
    Books.findById(req.params.id)
        .then(books => res.json(books))
        .catch(err => res.status(400).json('Error: ' + err));
}); //finds a book by id or returns an error

router.route('/:id/').delete((req, res) => {
    Books.findByIdAndDelete(req.params.id)
        .then(() => res.json('Books deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
}); //deletes a book by id or returns an error

router.route('/update/:id/').post((req, res) => {
    Books.findById(req.params.id)
        .then(books => {
            books.ISBN = req.body.ISBN;
            books.title = req.body.title;
            books.author = req.body.author;
            books.publisher = req.body.publisher;

            books.save()
                .then(() => res.json('Books updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
}); //updates a book by id or returns an error

module.exports = router;