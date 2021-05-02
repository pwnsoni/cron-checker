const cronController = require('../controllers/crons');

module.exports = (router) => {
    router.route('/cron')
        .post(cronController.add);

    router.route('/crons')
        .get(cronController.getAll)

    router.route('/cron/:_id')
        .get(cronController.getThisCron)
        .put(cronController.updateThisCron)
        .delete(cronController.deleteThisCron);
};