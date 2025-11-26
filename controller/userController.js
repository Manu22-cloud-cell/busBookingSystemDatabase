const db=require('../utils/db-connection')

const addUsers=(req,res)=>{
    const {name,email}=req.body;
    const insertQuery='INSERT INTO Users (name,email) VALUES (?,?)';

    db.execute(insertQuery,[name,email],(err)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message);
            db.end();
            return;
        }

        console.log("Value has been inserted");
        res.status(200).send(`User with name ${name} successfully added`);
    })
}

const getUsers=(req,res)=>{

    const getUsersQuery='SELECT * FROM Users';
    db.execute(getUsersQuery,(err,rows)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message);
            db.end();
            return;
        }
        console.log("Fetching all users list");
        res.status(200).json(rows);
    })
}

module.exports={
    addUsers,
    getUsers
}