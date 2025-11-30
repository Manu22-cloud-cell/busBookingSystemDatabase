const User=require('./users');
const Booking=require('./bookings');
const Bus=require('./buses');


// USER ↔ BOOKING (One-to-Many)
User.hasMany(Booking,{foreignKey:"userId"});
Booking.belongsTo(User,{foreignKey:"userId"});

// BUS ↔ BOOKING (One-to-Many)
Bus.hasMany(Booking,{foreignKey:"busId"});
Booking.belongsTo(Bus,{foreignKey:"busId"});

module.exports={
    User,
    Booking,
    Bus
}
