const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    postId: {
        type: Number,
        required: true,
    },
    userId: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    body: {
        type: String,
        require: true,
    }
}, {timestamps: true});

module.exports = mongoose.model('Comment', commentSchema);