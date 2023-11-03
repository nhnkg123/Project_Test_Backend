const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        require: true,
    },
    address: {
        type: String,
        require: true,
    }
}, {timestamps: true});

module.exports = mongoose.model('User', userSchema);