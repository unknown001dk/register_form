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
  cron.schedule(" 0 45 21 * * *", () => {
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
          intro: 'This is a reminder that our online class is scheduled to begin at 8:00 PM tonight. Please ensure you are prepared and logged in a few minutes before the start time to avoid any delays.',
          action: {
            instructions: 'To join the class, please click the button to join the class',
            button: {
              color: '#22BC66',
              text: 'Join Now',
              link: 'https://meet.google.com/rhm-jedy-frc',
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
        return res.status(201)
      })
    }
  }, {
    scheduled: true,
    timezone: "Asia/Kolkata"
  })
  
  // console.log(mail.name);

  // return res.status(200).json({
  //   message: "Email scheduled successfully",
  //   success: true,
  //   status: 200,
  //   data: {
  //     email: email
  //   }
  // })
};