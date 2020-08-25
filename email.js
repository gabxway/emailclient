require('dotenv').config();
const nodemailer = require('nodemailer');
const express = require('express');
const bodyParser = require('body-Parser');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();


let transporter = nodemailer.createTransport({
    service: 'gmail',   
  auth: {
    user: process.env.EMAIL, // generated ethereal user
    pass: process.env.PASSWORD // generated ethereal password
  }
});

const sendMail = (email, subject, text, cb) => {
  const mailOptions = {
       
      to: email,
      subject,
      text
  };



/*var mailOptions = {
  from: 'agandgakft@gmail.com',
  to: 'agandgakft@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};*/

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

//app.listen(3000, () => console.log('Server elindult...'));