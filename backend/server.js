const express = require('express'); 
const cors = require('cors'); //for cross origin requests
const mongoose = require('mongoose'); //for mongodb connection

require ('dotenv').config(); //for environment variables

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGO_URL;
mongoose.connect(uri, { useNewUrlParser: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
}); //mongo connection established

const usersRouter = require('./routes/user');  //imports the users router
const booksRouter = require('./routes/books');  //imports the books router
const issuesRouter = require('./routes/issues');  //imports the issues router

app.use('/users', usersRouter); 
app.use('/books', booksRouter);
app.use('/issues', issuesRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
}); //starts the server