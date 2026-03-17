const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: { type: String,required },
  email: { type: String ,required },
});

module.exports = mongoose.model("USER", userSchema);
