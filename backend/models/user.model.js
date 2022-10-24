const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
        minlength: 6
    },
}, {
    timestamps: true,
});
//timestamps: true, adds two fields to the schema: createdAt and updatedAt.

const User = mongoose.model('User', userSchema); //mongoose.model() creates a model from the schema

module.exports = User; //exports the User model so it can be used in other files