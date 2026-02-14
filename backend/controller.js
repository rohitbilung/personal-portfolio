const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "mail.redbilung.in",
    port: 465,
    secure: true,
    auth: {
        user: process.env.CONTACT_EMAIL,
        pass: process.env.CONTACT_PASS, // Use an "App Password", not your login password
    },
});

transporter.verify(function (error, success) {
  if (error) {
    console.log("SMTP ERROR:", error);
  } else {
    console.log("SMTP READY");
  }
});

module.exports = {
    getMail: async (req, res) => {
        const { name, email, message } = req.body;
        const mailOptions = {
            from: email,
            to: [process.env.EMAIL_USER, process.env.CONTACT_EMAIL], // Where you want to receive the mail
            subject: `New Portfolio Message from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        };
        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ success: true, message: 'Email sent successfully!' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: 'Failed to send email.' });
        }
    },

    getMsg: async (req, res) => {
        res.send("im working fine")
    }
}
