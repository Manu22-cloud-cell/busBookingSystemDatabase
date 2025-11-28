const {DataTypes}=require('sequelize');
const sequelize=require('../utils/db-connection');

const Booking = sequelize.define(
    "Booking",
    {
        bookingId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        seatNumber: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        tableName: "Bookings",
        timestamps: false
    }
);

module.exports = Booking;
