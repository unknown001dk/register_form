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
    .then(() => {    
      res.status(201).json({
        message: "User created successfully",
        success: true, 
      })
    })
    .catch((err) => {
        res.status(400).json({
          message: "User not created",
          success: false,
        });
      });
  } catch (error) {
    console.log(error);
  }
};