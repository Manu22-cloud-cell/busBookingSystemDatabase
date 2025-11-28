const db=require('../utils/db-connection');
const {Op}=require('sequelize');
const Bus=require('../models/buses');

const addBuses= async (req,res)=>{
    try {
        const {busNumber,totalSeats,availableSeats}=req.body;
        const bus= await Bus.create({
            busNumber:busNumber,
            totalSeats:totalSeats,
            availableSeats:availableSeats
        })
        console.log("Bus details has been added");
        res.status(200).send(`Bus with number ${busNumber} successfully added`);
    } catch (error) {
        res.status(500).send(err.message); 
    } 
};
const getAvailableBuses= async (req,res)=>{
    try {
        const { seat } = req.params;

        const buses = await Bus.findAll({
            where: {
                availableSeats: {
                    [Op.gt]: seat   // equivalent to availableSeats > seat
                }
            }
        });

        console.log(`Fetching buses with more than ${seat} available seats`);
        res.status(200).json(buses);
    } catch (error) {
        console.log(error.message);
        res.status(500).send(error.message);
    }
};
module.exports={
    addBuses,
    getAvailableBuses
}