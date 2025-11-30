const express=require('express');
const bookingController=require('../controller/bookingController');
const router=express.Router();

router.post('/addBooking',bookingController.addBooking);

module.exports=router;