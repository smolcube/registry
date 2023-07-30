
const asyncHandler = require('express-async-handler')
const User = require('../models/usersModel')

const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

// @desc register a new user
// @route POST /api/users
// @access public

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password} = req.body //getting data

  if(!name || !email || !password){ //validation
    res.status(400)
    throw new Error("add all fields")
  }
  //check if the user already exists
  const userExists =await User.findOne({email})
  if(userExists){
    res.status(400)
    throw new Error("user allredy exists")
  }

  //hash password
const salt = await bcrypt.genSalt(10)
const hashedPass = await bcrypt.hash(password, salt)

//create user
  const user = await User.create({
    name,
    email,
    password: hashedPass
  })

  if (user){
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email
    })

  } else {
    res.status(400)
    throw new Error('invalid user data')
  }

});



// @desc authenticate a user
// @route POST /api/users/login
// @access public

const loginUser = asyncHandler(async (req, res) => {
    res.json({ message: "user is logged" });
  });


// @desc Get user data
// @route GET /api/users/me
// @access private

const getMe = asyncHandler(async (req, res) => {
    res.json({ message: "display my data" });
  });


module.exports = {
    registerUser, 
    loginUser, 
    getMe
}

