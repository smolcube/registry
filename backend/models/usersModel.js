const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add name'],
      unique: true,
    },
    email: {
      type: String,
      required: [true, 'Please add email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please add password'],
    },
    picture: {
      type: String,
      // You can add any additional properties for the picture field here
    },
    bio: {
      type: String,
      // You can add any additional properties for the bio field here
    },
  },
  {
    timestamps: true, // This will add createdAt and updatedAt fields
  }
);

// Create the User model using the userSchema
const User = mongoose.model('User', userSchema);

module.exports = User;
