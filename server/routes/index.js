const crons = require('./cron');
const snsGroups = require('./snsGroups');
const lambda = require('./lambda');
const hit = require('./hit');

module.exports = (router) => {
  crons(router);
  snsGroups(router);
  lambda(router)
  hit(router)
  return router;
};