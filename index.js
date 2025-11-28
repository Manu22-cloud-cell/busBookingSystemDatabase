const express=require('express');
const db=require('./utils/db-connection');
const usersRouter=require('./routes/userRoutes');
const busesRouter=require('./routes/busRoutes');
const app=express();

app.use(express.json());

const userModel=require('./models/users');
const busModel=require('./models/buses');

app.use('/users',usersRouter);
app.use('/buses',busesRouter);

db.sync({force:false}).then(()=>{
    app.listen(3000,()=>{
    console.log("Server is running")
});
}).catch((err)=>{
    console.log(err);
})


