var http = require('http'); 

var generator = require('generate-password');
    var password = generator.generate({
	length: 10,
	numbers: true
    });
   console.log(password); 

var server = http.createServer(function (req, res) {
    if (req.url == '/') { 
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        res.write('<html><body><p>This is home Page. try http://localhost:5000/admin </p><br><p>Just run "<b>node server.js</b>" you will get a password everytime you run that command, also an email be sent to my personal email ! next time i will learn how to make an input so you can input your email haha, but if you wanna receive the email in your personal email just input manually your email address in the line "44" </p></body></html>');
        res.end();
    }

    else if (req.url == "/admin") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is admin Page.</p></body></html>');
        res.end();
    }
    else
        res.end('Invalid Request!');
});


// mailing 

var nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: "mail.klarrion.com",
    port: 465,
    secure: true,
    auth: {
    user: 'gomycode@klarrion.com',
    pass: 'Yassine2022'
  }
});

var mailOptions = {
  from: 'gomycode@klarrion.com',
// enter your email here between quotes
  to: 'medyassine.zahmoul@gmail.com',
// enter your email here between quotes
  subject: 'Sending Email using Node.js',
  text: `This is a generated password : ${password}`
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

// mailing

server.listen(5000);

console.log('Node.js web server at port 5000 is running.. and the you have a generated password :'  , password)