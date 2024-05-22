const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const userRoutes = require('./routes/userRoute');
const authRoutes = require('./routes/authRoute');
const postRoutes = require('./routes/postRoute');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
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
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.listen(5000, () => {
  console.log('server running on port 5000!');
});

app.use('/api/user', userRoutes.router);
app.use('/api/auth', authRoutes.router);
app.use('/api/post', postRoutes.router);
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
