const router = require('express').Router();
let Issues = require('../models/issues.model');

router.route('/').get((req, res) => {
    Issues.find()
        .then(issues => res.json(issues)) 
        .catch(err => res.status(400).json('Error: ' + err));
}); //finds all issues in the database or returns an error

router.route('/add').post((req, res) => {
    const title = req.body.title;
    const username = req.body.username;
    const dateissued = req.body.dateissued;
    const duedate = req.body.duedate;
    const status = req.body.status;

    const newIssues = Issues({title, username, dateissued, duedate, status});

    newIssues.save()
        .then(() => res.json('Issues added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id/').get((req, res) => {
    Issues.findById(req.params.id)
        .then(issues => res.json(issues))
        .catch(err => res.status(400).json('Error: ' + err));
}); //finds an issue by id or returns an error

router.route('/:id/').delete((req, res) => {
    Issues.findByIdAndDelete(req.params.id)
        .then(() => res.json('Issues deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id/').post((req, res) => {
    Issues.findById(req.params.id)
        .then(issues => {
            issues.title = req.body.title;
            issues.username = req.body.username;
            issues.dateissued = req.body.dateissued;
            issues.duedate = req.body.duedate;
            issues.status = req.body.status;

            issues.save()
                .then(() => res.json('Issues updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;