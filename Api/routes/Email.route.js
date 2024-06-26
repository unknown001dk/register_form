import express from 'express';
import { scheduleEmail, sendEmail } from '../controllers/Email.controller.js';

const emailRouter = express.Router();

emailRouter.post('/sendmail', sendEmail);
emailRouter.get('/schedule', scheduleEmail);

export default emailRouter;