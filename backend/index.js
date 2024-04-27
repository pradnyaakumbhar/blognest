const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoute');
const authRoutes = require('./routes/authRoute');
dotenv.config();
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('database connected');
  })
  .catch((err) => {
    console.log(err);
  });
const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log('server running on port 3000!');
});

app.use('/api/user', userRoutes.router);
app.use('/api/auth', authRoutes.router);
