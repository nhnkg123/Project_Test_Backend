const mongoose = require('mongoose');

const Comment = require('../models/comment');

let controller = {};

controller.getComments = () => {
    return new Promise ((resolve, reject) => {
        Comment.find()
            .then(comments => {
                resolve(comments);
            })
            .catch(err => reject(new Error(err)));
    });
}

controller.getCommentByPostId = (postId) => {
    return new Promise ((resolve, reject) => {
        Comment.find({ postId: postId })
            .then(comments => {
                resolve(comments);
            })
            .catch(err => {
                reject(new Error(err));
            });
    });
}

module.exports = controller;