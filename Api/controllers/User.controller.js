import User from '../models/User.model.js';

export const Login = async(req, res) => {
  const { name, email, phonenumber} = req.body;

  const newUser = new User({
    name,
    email,
    phonenumber,
  });
  try {
    await newUser.save()
    return res.status(201).json({
      message: "Form submitted successfully",
      success: true, 
    })
  } catch (error) {
    console.log(error);
  }
};