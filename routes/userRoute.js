const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();

router.get('/', (req, res, next) => {
    userController.getUsers()
        .then(result => {
            res.json({
                message: 'Fetched users successfully!',
                users: result
            })
        })
        .catch(err => next(err));
});

module.exports = router;