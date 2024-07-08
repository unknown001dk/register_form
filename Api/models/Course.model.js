import mongoose from "mongoose";

const CourseSchema = mongoose.Schema({
  name: {
    type: "String",
    required: true
  }, 
  email: {
    type: "String",
    required: true,
    unique: true
  }, 
  phonenumber: {
    type: "String",
    required: true
  }, 
  // language: {
  //   type: "String",
  //   required: true
  // }
}, 
{
  timestamps: true,
})

const Course = mongoose.model('Course',CourseSchema);

export default Course;