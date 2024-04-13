const bcrypt = require('bcryptjs');
const User = require('../Models/UserModel');

// register user
exports.signup = async (req, res, next) => {
    try{
        const user = await User.findOne({email: req.body.email});
        if(user){
            return 
        }
    }
}