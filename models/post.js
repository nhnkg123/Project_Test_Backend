const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    userId: {
        type: Number,
        require: true,
    }
}, {timestamps: true});

module.exports = mongoose.model('Post', postSchema);