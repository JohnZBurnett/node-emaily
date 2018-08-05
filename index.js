require('./models/User'); 

const express = require('express');
const mongoose = require('mongoose'); 
const passportConfig = require('./services/passport');
const keys = require('./config/keys')


const app = express(); 

require('./routes/authRoutes')(app); 

mongoose.connect(keys.mongoURI); 

const PORT = process.env.PORT || 5000;
app.listen(PORT)