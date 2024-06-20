import nodemailer from 'nodemailer';
import Mailgen from 'mailgen';

// test case
export const emailController = async(req, res) => {
  // const { email } = req.body;


  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: "maddison53@ethereal.email",
      pass:  "jn7jnAPss4f63QBp6D"
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  let message = {
    from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>",
  } 
  
  transporter.sendMail(message).then((info) => {
    return res.status(200).json({
      message: 'Email sent',
      success: true,
      status: 200,
      info: info.messageId,
      preview: nodemailer.getTestMessageUrl(info)
    })
  }).catch (error => {
    console.log(error);
    return res.status(400).json({
      message: 'Email not sent',
      success: false,
      status: 400,
      error
    })
  }) 
};

export const sendEmail = async(req, res) => {
  const { email, name } = req.body;

  let config = {
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass:  process.env.GMAIL_PASS,
    },
    // tls: {
    //   rejectUnauthorized: false
    // }
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