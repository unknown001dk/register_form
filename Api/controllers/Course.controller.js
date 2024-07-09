import Course from "../models/Course.model.js";
import { CourseRegmail } from "./Email.controller.js";

export const courseRegister = async(req, res) => {

  const { name, email, age, phonenumber, language} = req.body;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
  const phoneRegex = /^[0-9]{10}$/;

  if (!name ||!email ||!phonenumber || !language || !age) {
    return res.status(400).json({
      message: "All fields are required",
      success: false,
      status: 400
    });
  } else if (!emailRegex.test(email)) {
    return res.status(400).json({
      message: "Invalid email address",
      success: false,
      status: 400
    });
  } else if (!phoneRegex.test(phonenumber)) {
    return res.status(400).json({
      message: "Invalid phone number",
      success: false,
      status: 400
    });
  }

  if (email) {
    const user = await Course.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "Email already exists",
        success: false,
        status: 400
      });
    }
  }
  if ( age <= 15 ) {
    return res.status(400).json({
      message: "Age should be greater than 15",
      success: false,
      status: 400
    });
  }

  const newCourse = new Course({
    name,
    email,
    age,
    phonenumber,
    language
  });

  try {
    await newCourse.save();
    CourseRegmail(req, res);
    return res.json({
      message: "Course registeration successfully",
      success: true,
      status: 200
    });  
  } catch (error) {
    console.log(error);
  }
};