const express = require('express');
const app = express();

const Razorpay = require('razorpay');

const PORT = process.env.PORT || 3000;

app.use('/',(req,res)=>{
  res.send("This is razorpay");
});

app.listen(PORT,()=>{
  console.log(`Server is runnig on http://localhost:${PORT}`);
})