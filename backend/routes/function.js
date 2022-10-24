const router = require('express').Router();
let Function = require('../models/function.model');

router.route('/').get((req, res) => {
    Function.find()
        .then(functions => res.json(functions)) 
        .catch(err => res.status(400).json('Error: ' + err));
}); //finds all functions in the database or returns an error

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newFunction = new Function({
        username,
        description,
        duration,
        date,
    });

    newFunction.save()
        .then(() => res.json('Function added!'))
        .catch(err => res.status(400).json('Error: ' + err));
}); //adds a new function to the database or returns an error

router.route('/:id/').get((req, res) => {
    Function.findById(req.params.id)
        .then(functions => res.json(functions))
        .catch(err => res.status(400).json('Error: ' + err));
}); //finds a function by id or returns an error

router.route('/:id/').delete((req, res) => {
    Function.findByIdAndDelete(req.params.id)
        .then(() => res.json('Function deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
}); //deletes a function by id or returns an error

router.route('/update/:id/').post((req, res) => {
    Function.findById(req.params.id)
        .then(functions => {
            functions.username = req.body.username;
            functions.description = req.body.description;
            functions.duration = Number(req.body.duration);
            functions.date = Date.parse(req.body.date);

            functions.save()
                .then(() => res.json('Function updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
}); //updates a function by id or returns an error

module.exports = router;