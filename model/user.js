const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name!"],
    },

    email: {
      type: String,
      unique: true,
      lowercase: true,
      required: true,
      validate: [validator.isEmail, "Provide a correct email!"],
    },

    photo: String,

    password: {
      type: String,
      required: [true, "Please provide a password!"],
      select: false,
    },

    passwordConfirm: {
      type: String,
      required: [true, "Please confirm the password!"],
      validate: {
        validator: function (el) {
          return el === this.password;
        },

        message: "Passwords are not the same",
      },
    },
  }
);

userSchema.pre("save", async function (next) {
    this.passwordConfirm = undefined;
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.checkPassword = async function (
  realPassword,
  cryptedPassword
) {
  return await bcrypt.compare(realPassword.toString(), cryptedPassword);
};

const User = mongoose.model("user", userSchema);

module.exports = User;