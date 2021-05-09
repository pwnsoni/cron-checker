const crons = require('./cron');
const snsGroups = require('./snsGroups');
const lambda = require('./lambda')

module.exports = (router) => {
  crons(router);
  snsGroups(router);
  lambda(router)
  return router;
};