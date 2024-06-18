import express from 'express';
import userRoutes from './routes/User.route.js';

const app = express();
app.use(express.json());

app.use('/user', userRoutes);

app.listen(3000, () => {
  console.log('Server listening on http://localhost:3000');
});