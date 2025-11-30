const express=require('express');
const usersController=require('../controller/userController');
const router=express.Router();

router.post("/add",usersController.addUsers);
router.get('/',usersController.getUsers);
router.get('/:id/bookings',usersController.getUserBookings);

module.exports=router;