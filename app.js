const express = require('express');

const app = express();
const userRouter = require('./routes/userRoutes');
const tourRouter = require('./routes/tourRoutes');

//middlewares
app.use(express.json());
app.use('/api/v1/users', userRouter);
app.use('/api/v1/tours', tourRouter);
module.exports = app;
