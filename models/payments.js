const {Sequelize,DataTypes}=require('sequelize');
const sequelize=require('../utils/db-connection');

const Payment = sequelize.define(
    "Payments",
    {
        paymentId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        amountPaid: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        paymentStatus: {
            type: DataTypes.STRING(50),
            allowNull: false
        }
    }
);

module.exports = Payment;