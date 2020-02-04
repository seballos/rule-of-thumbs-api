const trialList = require('../controllers/TrialController')

module.exports = function(app) {
  app.route('/trial')
    .get(trialList.list)
    .post(trialList.create)

  app.route('/trial/:trialId')
    .get(trialList.read)
    .put(trialList.update)
    .delete(trialList.delete)
}
