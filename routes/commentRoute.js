const express = require('express');

const commentController = require('../controllers/commentController');

const router = express.Router();

router.get('/', (req, res, next) => {
    if(req.query.postId) {
        commentController.getCommentByPostId(req.query.postId)
            .then(comments => {
                res.json({
                    message: 'Fetched comments by postID successfully!',
                    comments: comments
                })
            })
            .catch(err => next(err));
    } else {
        commentController.getComments()
        .then(result => {
            res.json({
                message: 'Fetched comments successfully!',
               comments: result
            })
        })
        .catch(err => next(err));
    }    
});

module.exports = router;