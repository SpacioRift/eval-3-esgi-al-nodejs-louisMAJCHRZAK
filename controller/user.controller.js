const User = require("./../model/user.model.js");

exports.getAll = async (req, res, next) => {
    let userList = await User.findAll()
    res.status(200).json(userList);
}