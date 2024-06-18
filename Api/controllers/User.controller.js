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
    res.status(201).json({
      message: "User created successfully",
      success: true, 
    })
  } catch (error) {
    console.log(error);
  }
};