import express from 'express';
import { courseRegister } from '../controllers/Course.controller.js';

const courseRoutes = express.Router();

courseRoutes.get('/', courseRegister);

export default courseRoutes;