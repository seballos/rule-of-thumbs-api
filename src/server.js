const express    = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Trial = require('./models/Trial')
const TrialRoutes = require('./routes/TrialRoutes')

const port = process.env.PORT || 8080
const app        = express()

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/RuleOfThumbs')

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


// ROUTES FOR OUR API
// =============================================================================
const mainRouter = express.Router()

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
mainRouter.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', mainRouter);

// Enable Cors
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
  
TrialRoutes(app)

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
