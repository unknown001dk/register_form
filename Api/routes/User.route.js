import express from 'express';
import { Login } from '../controllers/User.controller.js';

const router = express.Router();

router.get('/', Login);

export default router;