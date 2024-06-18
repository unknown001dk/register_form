import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/User.route.js';
import { connectDB } from './config/db.js';


const app = express();
dotenv.config();
app.use(express.json());


app.use('/api/users', userRoutes);

const port = process.env.PORT || 5000;
connectDB();
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});