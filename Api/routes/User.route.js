import express from 'express';
import { userRegister } from '../controllers/User.controller.js';

const router = express.Router();

router.post('/create', userRegister);

export default router;