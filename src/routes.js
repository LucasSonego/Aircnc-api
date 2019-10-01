const express = require('express');
const multer = require('multer');

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const uploadConfig = require('./config/upload');



const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);

routes.post('/spots', upload.single('thumbnail'), SpotController.store);
routes.get('/spots', SpotController.index);

routes.get('/dashboard', DashboardController.show);

module.exports = routes;