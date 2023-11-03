const express = require('express');

const postController = require('../controllers/postController');

const router = express.Router();

router.get('/', (req, res, next) => {
    let page;
    if (req.body.page) {
        page = req.body.page;
    } else {
        page = 1;
    }
    postController.getPosts(page)
        .then(result => {
            res.json({
                message: 'Fetched post successfully!',
                posts: result
            })
        })
        .catch(err => next(err));
});

router.get('/:id', (req, res, next) => {
    const postId = req.params.id;
    postController.getPostById(postId)
        .then(post => {
            res.json({
                message: 'Post is found',
                post: post
            });
        })
        .catch(err => next(err))
});

router.post('/createPost', (req, res, next) => {
    const title =  req.body.title;
    const content = req.body.content;
    const userId = req.body.userId;
    postController.createPost(title, content, userId)
        .then(result => {
            console.log(result);
            res.json({
                message: "created new post !"
            }) 
        })
        .catch(err => next(err));
});

module.exports = router;