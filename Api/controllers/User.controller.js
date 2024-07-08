import User from '../models/User.model.js';
import { sendEmail } from './Email.controller.js';

export const userRegister = async(req, res) => {
  const { name, email, phonenumber} = req.body;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
  const phoneRegex = /^[0-9]{10}$/;

  if (!name || !email || !phonenumber) {
    return res.status(400).json({
      message: "All fields are required",
      success: false,
      status: 400
    });
  } else if (!emailRegex.test(email)) {
    return res.status(400).json({
      message: "Invalid email",
      success: false,
      status: 400
    });
  } else if (!phoneRegex.test(phonenumber)) {
    return res.status(400).json({
      message: "Invalid phonenumber",
      success: false,
      status: 400
    });
  }

  if (email) {
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "Email already exists",
        success: false,
        status: 400
      });
    }
  } 

  const newUser = new User({
    name,
    email,
    phonenumber,
  });

  try {
    await newUser.save()
    sendEmail(req, res);
    return res.status(201).json({
      message: "Form submitted successfully",
      success: true, 
      status: 201
    })
  } catch (error) {
    console.log(error);
  }
};
