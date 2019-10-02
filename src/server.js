const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
const mongodbConnection = require('./private/mongodb');

mongoose.connect(mongodbConnection, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname,'../', 'uploads')));
app.use(routes);

app.listen(3000);