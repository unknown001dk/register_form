import nodemailer from 'nodemailer';
import Mailgen from 'mailgen';
import User from '../models/User.model.js';
import cron from 'node-cron';

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
      // logo: Logo,
    },
  });

  let response = {
    body: {
      name: name,
      intro: 'Thank you for registering with us, We are thrilled to have you as a part of our community. Your registration was successful, and you are now a valued member of our platform.',
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

export const scheduleEmail = async(req, res) => {
  const userInfo = await User.find({});

  const mail = userInfo[0];
  cron.schedule(" 0 15 21 * * *", () => {
    for (let mail = 0; mail < userInfo.length; mail++) {
      const data = userInfo[mail];
      const name = data.name;
      const email = data.email;
  
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
          intro: 'Testing the mail from the main server',
          action: {
            instructions: 'To join the class, please click the button to join the class',
            button: {
              color: '#22BC66',
              text: 'Join Now',
              //link: 'https://meet.google.com/rhm-jedy-frc',
            }
          },
          outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.',
        },
      }
    
      let mailGen = mailGenerator.generate(response);
      let message = {
        from: process.env.GMAIL_USER,
        to: email,
        subject: 'Welcome to NoName Academy',
        html: mailGen,
      }
    
      transporter.sendMail(message).then(() => {
        
      })
    }
  }, {
    scheduled: true,
    timezone: "Asia/Kolkata"
  })
};