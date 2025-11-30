const express=require('express');
const db=require('./utils/db-connection');
const usersRouter=require('./routes/userRoutes');
const busesRouter=require('./routes/busRoutes');
const bookingRouter=require('./routes/bookingRoutes');
const app=express();

app.use(express.json());

//importing
require('./models');

app.use('/users',usersRouter);
app.use('/buses',busesRouter);
app.use('/bookings',bookingRouter);

db.sync({force:true}).then(()=>{
    app.listen(3000,()=>{
    console.log("Server is running")
});
}).catch((err)=>{
    console.log(err);
})


