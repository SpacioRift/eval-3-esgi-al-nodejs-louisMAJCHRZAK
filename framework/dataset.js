const User = require("../model/user.model.js");
const Post = require("../model/post.model.js");

const bcrypt = require('bcrypt');
const dataset = async () => {
    await User.create({
        email: "louis.majchrzaj73@gmail.com",
        password: bcrypt.hashSync('test123', 10),
        nickname: "SacioRift"
    });
    await User.create({
        email: "test.test@test.fr",
        password: bcrypt.hashSync('test456', 10),
        nickname: "Test"
    });
    await User.create({
        email: "louis.majchrzak@kipik.com",
        password: bcrypt.hashSync('superpassword73', 10),
        nickname: "SpacioDRift"
    });
    await User.create({
        email: "user.name@kipik.com",
        password: bcrypt.hashSync('kipik12', 10),
        nickname: "UserName"
    });

    await Post.create({
        content: "C'est un post KIPIK",
        userId: 3
    });
    await Post.create({
        content: "Une licorne de bonne humeur décide de faire une balade.",
        userId: 2
    });
    await Post.create({
        content: "Un cactus c'est comestible mais je ne te conseil pas d'en manger !",
        userId: 1
    });
    await Post.create({
        content: "Prout !",
        userId: 1
    });
}

module.exports = dataset;