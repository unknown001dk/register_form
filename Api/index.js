import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/User.route.js';
import { connectDB } from './config/db.js';
import path from 'path';

const __dirname = path.resolve();

const app = express();
dotenv.config();
app.use(express.json());
app.use(express.static(path.join(__dirname, '/frontend/dist')))
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'))
});

app.use('/api/users', userRoutes);

const port = process.env.PORT || 5000;
connectDB();
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});