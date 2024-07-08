import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { sendEmail } from './Email.controller.js';
import User from '../models/User.model.js';

export const userRegister = async(req, res) => {
  const { name, email, password } = req.body;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
  const hashedPassword = bcrypt.hashSync(password, 10);

  if (!name || !email || !password) {
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
    password: hashedPassword,
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

export const userLogin = async(req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({
      message: "User not found",
      success: false,
      status: 404
    });
  }

  const isMatch = bcrypt.compareSync(password, user.password);
  if (!isMatch) {
    return res.status(401).json({
      message: "Invalid credentials",
      success: false,
      status: 401
    });
  }

  // Generate JWT token
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  const expiryDate = new Date(Date.now() + 3600000);
  res
      .cookie('access_token', token, {httpOnly: true, expires: expiryDate})
      .status(200)
      .json({
        message: "Logged in successfully",
        success: true,
        status: 200,
        token,
        expiryDate
      })

  // Remember to add middleware to validate JWT token before accessing protected routes
  // add middleware to validate JWT token before accessing protected routes
  // middleware: (req, res, next) => {
  //   const token = req.header('Authorization').split(' ')[1];
  //   if (!token) return res.status(401).json({ message: 'Access denied. No token provided.' });

  //   jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
  //     if (err) return res.status(403).json({ message: 'Access denied. Invalid token.' });
  //     req.user = user;
  //     next();
  //   });
  // 
};

export const userLogout = async(req, res) => {
  const { id } = req.params;
  const user = await User.findByIdAndUpdate(id, { isOnline: false });

  if (!user) return res.json({ message: 'Invalid token.' });

  res.clearCookie('access_token').status(200).json({ message: 'Logged out successfully.' });
  

  // Remember to add middleware to validate JWT token before accessing protected routes
  // middleware: (req, res, next) => {
  //   const token = req.header('Authorization').split(' ')[1];
  //   if (!token) return res.status(401).json({ message: 'Access denied. No token provided.' });
  //   jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
  //     if (err) return res.status(403).json({ message: 'Access denied. Invalid token.' });
  //     req.user = user;
  //     next();
  //   });
  // }
};