const express=require('express');
const mysql=require('mysql2');
const app=express();

const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'252582',
    database:'busbookingsystemdb'
});

connection.connect((err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("Connection has been created");

    const queries =[

    `CREATE TABLE IF NOT EXISTS Users(
    userId INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
    )`,

    `CREATE TABLE IF NOT EXISTS Buses(
    busId INT AUTO_INCREMENT PRIMARY KEY,
    busNumber VARCHAR(50) NOT NULL,
    totalSeats INT NOT NULL,
    availableSeats INT NOT NULL
    )`,

    `CREATE TABLE IF NOT EXISTS Bookings(
    bookingId INT AUTO_INCREMENT PRIMARY KEY,
    seatNumber INT NOT NULL
    )`,

    `CREATE TABLE IF NOT EXISTS Payments(
    paymentId INT AUTO_INCREMENT PRIMARY KEY,
    amountPaid INT NOT NULL,
    paymentStatus VARCHAR(50) NOT NULL
    )`
];

queries.forEach((query)=>{
    connection.query(query,(err)=>{
        if(err) console.log(err);
        else console.log("Table created");
    });
});  
});

app.get('/',(req,res)=>{
    res.send("Welcome to Bus booking system")
});

app.listen(3000,()=>{
    console.log("Server is running")
});