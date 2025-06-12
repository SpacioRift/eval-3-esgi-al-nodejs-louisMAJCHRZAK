const {bdd} = require('../framework/connexion.js');
const {DataTypes} = require('sequelize');

const Emotion = bdd.define('Emotion', {
    type: {
        type: DataTypes.ENUM('like', 'love', 'thumbup', 'thumbdown'),
        allowNull: false
    }
});

module.exports = Emotion;