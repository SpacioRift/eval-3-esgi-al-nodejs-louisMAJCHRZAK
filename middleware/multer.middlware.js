const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, 'picture')
    },
    filename: function(req, file, cb){
        let filename =  file.originalname.replaceAll(' ', '_').split('.');
        let extension = filename.pop();
        filename += Date.now();
        filename += "." + extension;
        cb(null, filename);
    }
})

module.exports = multer({storage}).single('picture');