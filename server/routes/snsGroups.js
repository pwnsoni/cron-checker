const snsGroupController = require('../controllers/snsGroups');

module.exports = (router) => {
    router.route('/snsGroup')
        .post(snsGroupController.add);

    router.route('/snsGroups')
        .get(snsGroupController.getAll)

    router.route('/snsGroup/:_id')
        .get(snsGroupController.getThisSnsGroup)
        .put(snsGroupController.updateThisSnsGroup)
        .delete(snsGroupController.deleteThisSnsGroup);
};