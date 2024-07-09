import nodemailer from 'nodemailer';
import Mailgen from 'mailgen';
import User from '../models/User.model.js';

export const UserRegmail = async(req, res) => {
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
      intro: 'Thank you for registering with us. We are thrilled to welcome you as a valued member of our community. Your registration was successful, and you are now part of a dynamic platform dedicated to excellence and innovation. As a member, you will have access to exclusive resources, insightful content, and a network of like-minded individuals. We are committed to providing you with the best experience possible and look forward to supporting you in your journey with us.',
      outro: 'If you have any questions or need assistance, please do not hesitate to reach out to our support team.',
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

export const CourseRegmail = ( req, res ) => {
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
      intro: 'Thank you for registering for our courses. We are delighted to welcome you to our esteemed community of learners and professionals. Your registration has been successfully completed, and you are now a valued member of our platform. We are committed to providing you with a rich learning experience and the support you need to achieve your educational and career goals.',
      outro: 'If you have any questions or need assistance, please do not hesitate to reach out to our support team. We look forward to your active participation and wish you great success in your learning journey with us.',
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
        intro: 'This is a reminder that our online class is scheduled to begin at 10:30 AM tonight. Please ensure you are prepared and logged in a few minutes before the start time to avoid any delays.',
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
      console.log("Email sent successfully");
    })
  }
};