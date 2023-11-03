const mongoose = require('mongoose');

const User = require('../models/user');

let controller = {};

controller.getUsers = () => {
    return new Promise ((resolve, reject) => {
        User.find()
            .then(users => {
                resolve(users);
            })
            .catch(err => reject(new Error(err)));
    });
}

module.exports = controller;