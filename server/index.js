const express = require('express');
const bodyParser = require('body-parser')
require('dotenv').config();
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const { loadNuxt} = require('nuxt');
app.use('/_nuxt', express.static('./.nuxt/dist/client'))


app.get('/*', async (req, res) => {
    console.log(process.env.MONGO_CONNECTION_URI)
    console.log(`serving start ${req.url}`)
    console.log('initiating Nuxt');
    const nuxt = await loadNuxt('dev')
    nuxt.render(req, res);
    console.log('served')
})

app.listen(process.env.PORT, (err) => {
    if (!err) console.log(`listening on ${process.env.PORT}`)
})

module.exports = {app};







