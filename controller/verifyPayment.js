const dotenv = require('dotenv');
dotenv.config();
const {validatewebhookSignature} = require('razorpay/dist/utils/razorpay-utils');


const verifyPayment = async(req,res)=>{
  try{
    //verification of response send by razorpay server after payment 
    const{razorpay_order_id,razorpay_payment_id,razorpay_signature} = req.body;

    const secret = process.env.RAZORPAY_KEY_SECRET;

    //concat orderid+paymentid

    const body = razorpay_order_id + "|" +razorpay_payment_id;//used for compairing with signature


   const isValidSignature = validatewebhookSignature(body,razorpay_signature,secret);

   if(isValidSignature){
    res.json({
      status:200,
      message:"ok"
    });
    console.log("Payment verification Successful");

   }else{
      
     res.json({
      status:400,
      message:"Payment Verification Failed"
     });


   }



  }catch(err){
    res.json({
      status:500,
      message:"Internal Server Error"
    });

  }
}

module.exports = {verifyPayment};