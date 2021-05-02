const express = require('express');
const bodyParser = require('body-parser')
require('dotenv').config();
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const { loadNuxt} = require('nuxt');
app.use('/_nuxt', express.static('./.nuxt/dist/client'))

const router = express.Router();
const routes = require('./routes/index.js');

app.use('/api', routes(router));


app.get('/*', async (req, res) => {
    console.log(`serving start ${req.url}`)
    console.log('initiating Nuxt');
    const nuxt = await loadNuxt('start')
    nuxt.render(req, res);
    console.log('served')
})

app.listen(process.env.PORT, (err) => {
    if (!err) console.log(`listening on ${process.env.PORT}`)
})

module.exports = {app};







