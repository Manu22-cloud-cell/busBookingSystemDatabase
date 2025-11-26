const db=require('../utils/db-connection')

const addBuses=(req,res)=>{
    const {busNumber,totalSeats,availableSeats}=req.body;
    const insertBusesQuery='INSERT INTO Buses (busNumber,totalSeats,availableSeats) VALUES (?,?,?)';

    db.execute(insertBusesQuery,[busNumber,totalSeats,availableSeats],(err)=>{
        if(err){
           console.log(err.message);
           res.status(500).send(err.message);
           db.end();
           return; 
        }
        console.log("Bus details has been added");
        res.status(200).send(`Bus with number ${busNumber} successfully added`);
    })
}

const getAvailableBuses=(req,res)=>{
    const {seat}=req.params;
    const getAvailableBusesQuery=`SELECT * FROM Buses WHERE availableSeats>?`;

    db.execute(getAvailableBusesQuery,[seat],(err,rows)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message);
            db.end();
            return;
        }
        console.log(`Fetching buses with more than ${seat} available seats`);
        res.status(200).json(rows);
    })
}

module.exports={
    addBuses,
    getAvailableBuses
}