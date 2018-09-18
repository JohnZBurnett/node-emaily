const passport = require('passport'); 
const cookieSession = require('cookie-session');
const express = require('express');
const mongoose = require('mongoose'); 
const keys = require('./config/keys'); 
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser'); 
require('./models/User'); 
require('./models/Survey'); 
require('./services/passport');

const app = express(); 

app.use(bodyParser.json()); 
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
); 

app.use(passport.initialize()); 
app.use(passport.session()); 

require('./routes/authRoutes')(app); 
require('./routes/billingRoutes')(app); 
require('./routes/surveyRoutes')(app); 

mongoose.connect(keys.mongoURI); 

if (process.env.NODE_ENV === 'production') {
    // Express will serve up production assets
    // like our main.js or main.css file 
    app.use(express.static('client/build')); 

    // Express will serve up index.html if it doesn't recognize the route!
    const path = require('path'); 
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')); 
    }); 
}

app.listen(PORT)

