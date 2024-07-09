import express from 'express';
import { courseRegister } from '../controllers/Course.controller.js';

const courseRoutes = express.Router();

courseRoutes.post('/register', courseRegister);

export default courseRoutes;