const db=require('../utils/db-connection');
const User=require('../models/users');

const addUsers= async (req,res)=>{
    try {
        const {name,email}=req.body;
        const user= await User.create({
        name:name,
        email:email
    });
       res.status(200).send(`User with name ${name} successfully added`)
    } catch (error) {
        res.status(500).send('Unable to make any entry');
    }
};

const getUsers= async (req,res)=>{
    try {
        const users= await User.findAll();
        console.log("Fetching all users list");
        res.status(200).send(users);
    } catch (error) {
        console.log(error.message);
        res.status(500).send(error.message) 
    }
};

module.exports={
    addUsers,
    getUsers
}