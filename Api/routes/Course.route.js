import express from 'express';
import { courseRegister } from '../controllers/Course.controller.js';

const courseRoutes = express.Router();

courseRoutes.post('/', courseRegister);

export default courseRoutes;