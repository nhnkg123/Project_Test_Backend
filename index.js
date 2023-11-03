const express = require('express');
const mongoose = require('mongoose');

const app = express();

const bodyParser = require('body-parser');

const postRoute = require('./routes/postRoute');
const userRoute = require('./routes/userRoute');
const commentRoute = require('./routes/commentRoute');

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/posts', postRoute);
app.use('/users', userRoute);
app.use('/comments', commentRoute);

mongoose.connect('mongodb+srv://nhnkg123:03110712@cluster0.obhtxgf.mongodb.net/posts?retryWrites=true&w=majority')
    .then(result => {
        app.listen(4000);
    })
    .catch(err => console.log(err));
