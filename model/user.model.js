const {bdd} = require('../framework/connexion.js');
const {DataTypes} = require('sequelize');

const User = bdd.define('user',{
  email:{
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING(256),
      allowNull: false
  },
  nickname: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = User;