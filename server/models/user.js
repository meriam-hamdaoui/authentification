const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: [true, "this field can't be empty"],
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
});

module.exports = USER = mongoose.model("user", userSchema);
