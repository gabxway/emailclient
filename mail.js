require('dotenv').config();
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer');
const bodyParser = require('body-Parser');
//const mailGun = require('nodemailer-mailgun-transport');
const { text } = require('body-parser');



let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL, // generated ethereal user
        pass: process.env.PASSWORD // generated ethereal password
    }
});

const sendMail = (email, subject, text, cb) => {
    const mailOptions = {
        form: email,
        to: email,
        subject,
        text
    };
    
    transporter.sendMail(mailOptions, function(err, data){
        if (err) {
           // console.log('Error Occurs');
           cb(err, null);
        } else {
           //console.log('Message sent!!!');
           cb(null, data);
        }
    });
}

module.exports = sendMail;