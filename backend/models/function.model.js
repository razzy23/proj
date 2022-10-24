const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const functionSchema = new Schema({
    username: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true },
}, {
    timestamps: true,
});

const Function = mongoose.model('Function', functionSchema); //mongoose.model() creates a model from the schema

module.exports = Function; //exports the Function model so it can be used in other files