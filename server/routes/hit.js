const hitController = require('../controllers/hits');

module.exports = (router) => {
    router.route('/hit')
        .post(hitController.hit)
        .put(hitController.recordHit);

    router.route('/hit/:_id')
        .get(hitController.getThisHit)
        // .put(hitController.updateThisHit)
        // .delete(hitController.deleteThisHit);
};