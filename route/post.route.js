const express = require('express');
const postController = require('./../controller/post.controller.js');
const multerController = require('./../middleware/multer.middlware.js');
const auth = require('../middleware/auth.middleware.js');

const router = express.Router();

router.get("/",auth,postController.getAll);
router.get("/:id",auth,postController.getById);
router.post("/",auth,multerController,postController.createPost);
router.put("/:id",auth,multerController,postController.updatePost);
router.delete("/:id",auth,postController.deletePost);

router.post('/:id/emotions',auth,postController.addEmotion);
router.delete('/:id/emotions',auth,postController.deleteEmotion);

module.exports = router;