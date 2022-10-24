const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const booksSchema = new Schema({
    ISBN: { type: String, required: true },
    title: { type: String, required: true },
    author: { type: String, required: true },
    publisher: { type: String, required: true }
});

const Books = mongoose.model('Books', booksSchema);

module.exports = Books;