const express = require('express');
const bodyParser = require('body-parser')
require('dotenv').config();
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const router = express.Router();
const routes = require('./routes/index.js');

app.use('/api', routes(router));


module.exports = {app, express};







