const {DataTypes}=require('sequelize');
const sequelize=require('../utils/db-connection');

const User=sequelize.define(
    "User",
    {
        userId:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        name:{
            type:DataTypes.STRING(255),
            allowNull:false
        },
        email:{
            type:DataTypes.STRING(255),
            allowNull:false
        }
    },
    {
        tableName:"Users",
        timestamps:false
    }
);

module.exports=User;