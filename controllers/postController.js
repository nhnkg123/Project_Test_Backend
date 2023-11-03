const mongoose = require('mongoose');

const Post = require('../models/post');

let controller = {};

controller.getPosts = (page) => {
    return new Promise ((resolve, reject) => {
        const limit = 5;
        Post.find()
            .skip((page - 1) * limit)
            .limit(limit)
            .then(posts => {
                resolve(posts);
            })
            .catch(err => reject(new Error(err)));
    });
}

controller.getPostById = (id) => {
    return new Promise ((resolve, reject) => {
        Post.findById()
            .then(post => {
                resolve(post);
            })
            .catch(err => {
                reject(new Error(err));
            })
    });
}

controller.createPost = (title, content, userId) => {
    return new Promise ((resolve, reject) => {
        const post = new Post({
            title: title,
            content: content,
            userId: userId
        });
    
        post.save()
            .then(result => {
                resolve(result);  
            })
            .catch(err => reject(new Error(err)));
    });
    
}

module.exports = controller;