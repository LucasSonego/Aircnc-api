const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');

const app = express();
const mongodbConnection = require('./private/mongodb');

mongoose.connect(mongodbConnection, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);

app.listen(3000);