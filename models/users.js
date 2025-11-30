const {Sequelize,DataTypes}=require('sequelize');
const sequelize=require('../utils/db-connection');

const User=sequelize.define(
    "Users",
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
    }
);

module.exports=User;