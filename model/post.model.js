const {bdd} = require('../framework/connexion.js');
const {DataTypes} = require('sequelize');

const Post = bdd.define('post',{
    content:{
        type: DataTypes.TEXT,
        allowNull: false
    },
    picture: {
        type: DataTypes.STRING(255),
        allowNull: true
    }
});

module.exports = Post;