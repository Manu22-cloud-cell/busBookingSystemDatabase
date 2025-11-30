const express=require('express');
const busesController=require('../controller/busController');
const router=express.Router();

router.post('/add',busesController.addBuses);
router.get('/available/:seat',busesController.getAvailableBuses);
router.get('/:id/bookings',busesController.getBusBookings);

module.exports=router;