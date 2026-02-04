const express = require('express');
const userRouter = express.Router();
const {createorder}= require('../controller/createOrder');

//prefix-endpoint user
userRouter.post('/create-order',createorder);

module.exports = {userRouter};

