import express from 'express';
import { userLogin, userLogout, userRegister } from '../controllers/User.controller.js';

const router = express.Router();

router.post('/signup', userRegister);
router.post('/login', userLogin);
router.post('/logout', userLogout);

export default router;