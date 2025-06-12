const { bdd } = require('./connexion.js');
const User = require("../model/user.model.js");
const Post = require("../model/post.model.js");

const sync = async () => {
    User.hasMany(Post, {foreignKey: 'authorId'});
    Post.belongsTo(User, {foreignKey: 'authorId'});
    await bdd.sync({ force: true });
}

module.exports = sync;