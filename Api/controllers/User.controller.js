import User from '../models/User.model.js';
import { sendEmail } from './Email.controller.js';

export const Login = async(req, res) => {
  const { name, email, phonenumber} = req.body;

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
