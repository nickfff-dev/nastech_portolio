require('dotenv').config();
const express = require('express')
const cors = require('cors')
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const bodyParser = require('body-parser');
const path = require('path');












const MY_GMAIL ="jumanaturetech@gmail.com"
const MY_GMAIL_PASSWORD = "jytm khdc rxwu kxwy"


const app = express()
const PORT = process.env.PORT || 5000



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(cors({origin: "http://localhost:3000",methods: "GET,HEAD,PUT,PATCH,POST,DELETE",credentials: true, }));



app.post('/api/sendMessage', (req, res) => {
   
    const data = req.body
  
    console.log(req.body)
   
  
  
  
  

    const transporter = nodemailer.createTransport(smtpTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 465,
        auth: {
          user: MY_GMAIL,
          pass: MY_GMAIL_PASSWORD
        }
    }));
  
  
 
   
    

    const mailOptions = {
        from: data.email,
      to: MY_GMAIL,
        cc: "nickkoriz@gmail.com",
        bcc: data.email,
        subject: data.subject,
        message: data.message,
  };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log(error);
                    res.send("email not sent" )
                } else {
                    console.log('Message sent: %s', info.messageId);
                    res.status(200).send('Send email successfully');
                }
            });
       
   
 
 
    
    
});





app.listen(PORT, () => { 
    console.log(`Server is running on port: ${PORT}`)
});