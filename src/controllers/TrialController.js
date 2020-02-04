const mongoose = require('mongoose')
const Trial = mongoose.model('Trial')

module.exports = {
  list: function(req, res) {
    Trial.find({}, function(err, trial) {
      if(err) {
	res.send(err)
      }
      res.json(trial)
    })
  },

  create: function(req, res) {
    const newTrial = new Trial(req.body)
    newTrial.save(function(err, trial) {
      if (err) {
	      res.send(err)
      }
      res.json(trial)
    })
  },

  read: function(req, res) {
    Trial.findById(req.params.trialId, function(err, trial){
      if (err) {
      	res.send(err)
      }
      res.json(trial)
    })
  },

  update: function(req, res) {
    Trial.findOneAndUpdate({
      _id: req.params.trialId
    }, req.body, {
      new: true
    }, function(err, trial) {
      if (err) {
      	res.send(err)
      }
      res.json(trial)
    })
  },

  delete: function(req, res) {
    Trial.remove({
      _id: req.params.trialId
    }, function(err, trial) {
      if (err) {
	      res.send(err)
      }
      res.json({ message: 'Prial succesfully deleted' })
    }) 
  }
}
