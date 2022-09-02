// const asyncHandler = require("express-async-handler");
const { User } = require("../models/userModel");
const catchAsync  = require("../utils/catchAsync");

const registerUser = catchAsync(async (req, res) => {
    
    
    const { name, email, password, pic } = req.body;

    const userExists = await User.findOne({ email: email });
    console.log(userExists);

    if (userExists) {
        res.status(400);
        throw new Error("User already exists");
    }

    const user = await User.create({
        name,
        email,
        password,
        pic,
    });

    if (user) {
        res.send({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
        });
    } else {
        res.status(400);
        throw new Error("User not found");
    }
});


module.exports = { registerUser };
