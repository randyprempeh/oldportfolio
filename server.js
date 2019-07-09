const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const PORT = 5000;
const fs = require("fs");
const nodemailer = require('nodemailer');

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get("/contact", (req, res) => {
  console.log("works");
  res.render("contact")
})

// Send email to Contact routes
app.post("/sendEmail", (req, res) => {

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "ranprems@gmail.com",
    }
  });
  console.log(req.body);

  // configure email details
  const mailOptions = {
    from: req.body.email,
    to: "ranprems@gmail.com",
    subject: "offer alert",

    html: "<h6 style=color:blue;>" + req.body.email + ":" + "wrote" + "</h6>" +
      "<h2 style=font-family:Open Sans,sans-serif;>" + req.body.message + "</h2>" +
      "<p style=text-transform:uppercase;>" + req.body.name + "</p>"
  };

  // send email now
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
      res.send('email send successfully.....!');

    }
  });
});



app.listen(PORT, () => {
  console.log(`Server is runing on port" ${PORT}`);

}) 