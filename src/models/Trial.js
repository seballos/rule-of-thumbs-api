const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TrialsSchema = new Schema({
  active: Boolean,
  name: String,
  trialDueDate: String,  
  category: String,
  description: String,
  bgImage: String,
  wikiLink: String,
  stats: {
    thumbsUp: Number,
    thumbsDown: Number,
  }
})

module.exports = mongoose.model('Trial', TrialsSchema)
