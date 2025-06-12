const Emotion = require("../model/emotion.model.js");
const Post = require("../model/post.model.js");
const { where } = require("sequelize");

exports.getAll = async (req, res, next) => {
    let postList = await Post.findAll()
    res.status(200).json(postList)
}

exports.getById = async (req, res, next) => {
    try {
        let postList = await Post.findOne({
        where: {
            id: req.params.id
        }
    })
    if (!postList) {
        return res.status(404).json({ message: "Post non trouvé" });
    }
    res.status(200).json(postList)
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.createPost = async (req, res, next) => {
    const userId = req.token.id;
    const postData = {
        content: req.body.content,
        authorId: userId
    };
    if(req.file){
        postData.picture = req.file.filename;
    }
    try {
       let post = await Post.create(postData)
       if (!post){
            return res.status(401).json({ message: "Un problème est survenu lors de la création du post" });
       }
       return res.status(200).json(post);
    } catch (error) {
        res.status(500).json(error);
    }  
}

exports.updatePost = async (req, res, next) => {
    try {
        const userId = req.token.id;
        let post = await Post.findOne({
            where: {
                id: req.params.id
            }
        })
        if (!post) {
            return res.status(404).json({ message: "Post non trouvé" });
        }
        if (post.authorId !== userId) {
            return res.status(403).json({ message: "Vous n'êtes pas autorisé à modifier ce post" })
        }
        if(req.file){
            post.picture = req.file.filename;
        }
        await post.save();
        res.status(200).json({ message: "Post modifié avec succès : ", post: post });
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.deletePost = async (req, res, next) => {
    try {
        const userId = req.token.id;
        let post = await Post.findOne({
            where: {
                id: req.params.id
            }
        })
        if (!post) {
            return res.status(404).json({ message: "Post non trouvé" });
        }
        if (post.authorId !== userId){
            return res.status(403).json({ message: "Vous n'êtes pas autorisé à supprimer ce post" });
        }
        await post.destroy();
        res.status(200).json({ message : "Post supprimé" });
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.addEmotion = async (req, res, next) => {
    try {
        const userId = req.token.id;
        let post = await Post.findOne({
            where: {
                id: req.params.id
            }
        })
        if (!post) {
            return res.status(404).json({ message: "Post non trouvé" });
        }
        if (!req.body.type) {
            return res.status(400).json({ message: "Il faut selectionner une emotiob" });
        }
        const currentEmotion = await post.getEmotions({
            where: {
                authorId: userId
            }
        });
        if(currentEmotion != req.body.type){

        }else{
            
        }
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.deleteEmotion = async (req, res, next) => {
    try {
        const userId = req.token.id;
        let post = await Post.findOne({
            where: {
                id: req.params.id
            }
        })
        if (!post) {
            return res.status(404).json({ message: "Post non trouvé" });
        }
        
        
    } catch (error) {
        res.status(500).json(error);
    }
}