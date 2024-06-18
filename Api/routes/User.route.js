import express from 'express';
import { Login } from '../controllers/User.controller.js';

const router = express.Router();

router.post('/create', Login);

export default router;