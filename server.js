
require('dotenv').config();
const exphbs = require('express-handlebars');
const bodyParser = require('body-Parser');
const express = require('express'); //1
const sendMail = require('./email')
const log = console.log;
const app = express();
const path = require('path');


const PORT = 8080;


// 2

// data parsing
app.use(express.urlencoded({ extended: false}));
app.use(express.json());




app.post('/email', (req, res) => {
    // TODO:
    // send email here
    const { subject, email, text } = req.body;   
    console.log('Data: ', req.body);

    sendMail(email, subject, text, function(err, data) {
        if (err) {
            res.status(500).json({ message: 'internal Error' });
        } else {
            res.json({ message: 'Email sennt!!!' })
        }
    });
    
});


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));

});
   
app.listen(PORT, () => log('Server starting on PORT,', 8080));