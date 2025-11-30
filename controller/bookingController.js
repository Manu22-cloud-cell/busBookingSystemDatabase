const Booking=require('../models/bookings');

const addBooking= async (req,res)=>{
    try {
        const {userId,busId,seatNumber}=req.body;

        const booking= await Booking.create({
            userId,
            busId,
            seatNumber
        })
        res.status(201).send({
            message: "Booking created successfully",
            booking
        });
    } catch (error) {
        res.status(500).send({'error':error.message});
    }
}
module.exports={
    addBooking
}