const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const issuesSchema = new Schema({
    title: { type: String, required: true },
    username: { type: String, required: true },
    dateissued: { type: Date, required: true },
    duedate: { type: Date, required: true },
    status: { type: Boolean, required: true }
});

const Issues = mongoose.model('Issues', issuesSchema);

module.exports = Issues;
