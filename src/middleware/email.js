const nodemailer = require("nodemailer");


let transporter = nodemailer.createTransport({
	// service: "gmail",
    host: "smtp.zoho.com",
    secure: true,
    port: 465,
    auth: {
		user: "noreply@pijarproject.site",
		pass:  "yqJN1sCZcrWB"
    },
  });
 
module.exports = (email, subject, verifUrl,fullname) => {
	let mailOptions = {
		from: "noreply@pijarproject.site",
		to: email,
		subject: `${subject} is your otp`,
		text: `Hello ${fullname} \n Thank you for join us. Please copy your otp and verif  otp --${subject}--`
	};

	transporter.sendMail(mailOptions, function(err, data) {
		if (err) {
		  console.log("Error " + err);
		  console.log("email not sent!");
		} else {
		  console.log("Email sent successfully");
		  return "email sent successfully"
		}
	  });
};


