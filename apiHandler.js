const {app, express} = require('./server/app');

module.exports.render = serverless(app);
