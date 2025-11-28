const {DataTypes}=require('sequelize');
const sequelize=require('../utils/db-connection');

const Payment = sequelize.define(
    "Payment",
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
    },
    {
        tableName: "Payments",
        timestamps: false
    }
);

module.exports = Payment;