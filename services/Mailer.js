const sendgrid = require('sendgrid');
const helper = sendgrid.mail; 
console.log("SENDGRID LIBRARY: ", sendgrid); 
const keys = require('../config/keys'); 

class Mailer extends helper.Mail {
    
}