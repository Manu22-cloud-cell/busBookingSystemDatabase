const express=require('express');
const usersRouter=require('./routes/userRoutes');
const busesRouter=require('./routes/busRoutes');
const app=express();

app.use(express.json());

app.use('/users',usersRouter);
app.use('/buses',busesRouter);

app.listen(3000,()=>{
    console.log("Server is running")
});