const express = require('express');
const serverless = require('serverless-http');
const app = express();

const { loadNuxt} = require('nuxt');

app.use('/_nuxt', express.static('./.nuxt/dist/client'))

app.get('/testUI', (req, res) => {
    console.log('`enjoy --> ${req.url}`')
    res.send({status: 200, message: 'ok'})
})

app.get('/*', async (req, res) => {
    console.log(`serving start ${req.url}`)
    console.log('initiating Nuxt');
    const nuxt = await loadNuxt('start')
    nuxt.render(req, res);
    console.log('served')
})

app.listen(3000);

module.exports.render = serverless(app);
