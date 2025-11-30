const {Sequelize,DataTypes}=require('sequelize');
const sequelize=require('../utils/db-connection');

const Booking = sequelize.define(
    "Bookings",
    {
        bookingId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userId:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        busId:{
            type:DataTypes.INTEGER,
            allowNull:false

        },
        seatNumber: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }
);

module.exports = Booking;
