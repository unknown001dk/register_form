import nodemailer from 'nodemailer';
import Mailgen from 'mailgen';

export const sendEmail = async(req, res) => {
  const { email, name } = req.body;

  let config = {
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass:  process.env.GMAIL_PASS,
    }
  }
  let transporter = nodemailer.createTransport(config);

  let mailGenerator = new Mailgen({
    theme: 'default',
    product: {
      name: 'NoName Academy',
      link: 'https://nonametech.info',
    },
  });

  let response = {
    body: {
      name: name,
      intro: 'Thank you for registering with us',
      action: {
        instructions: 'To complete your registration, please click the button below:',
        button: {
          color: '#22BC66',
          text: 'Complete Registration',
          link: 'https://noname-maw3.onrender.com/',
        },
      },
      outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.',
    },
  }

  let mail = mailGenerator.generate(response);
  let message = {
    from: process.env.GMAIL_USER,
    to: email,
    subject: 'Welcome to NoName Academy',
    html: mail,
  }

  transporter.sendMail(message).then(() => {
    return res.status(201)
  })
};