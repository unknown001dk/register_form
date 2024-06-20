import express from 'express';
import { emailController, sendEmail } from '../controllers/Email.controller.js';

const emailRouter = express.Router();

emailRouter.post('/', emailController);
emailRouter.post('/sendmail', sendEmail);

export default emailRouter;