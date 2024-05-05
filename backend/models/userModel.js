const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
      // select: false,
    },
    profilePic: {
      type: String,
      default:
        'https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg',
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// const User = mongoose.model('User', userSchema);
// export default User;
module.exports = mongoose.model('User', userSchema);
