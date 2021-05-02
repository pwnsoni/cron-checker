const crons = require('./cron');
const snsGroups = require('./snsGroups');

module.exports = (router) => {
  crons(router);
  snsGroups(router);
  return router;
};