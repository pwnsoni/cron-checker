const lambdaController = require('../controllers/lambda');

module.exports = (router) => {
    router.route('/invoke')
        .post(lambdaController.invoke);
};