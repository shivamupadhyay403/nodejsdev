const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: { type: String, required },
  firstname: { type: String, required },
  lastname: { type: String, required },
  email: { type: String, required },
  role: {
    type: String,
    enum: ["M", "F"],
  },
  gender: { type: String, required },
  password: { type: String, required },
  blocked_user: { type: Boolean },
  news_letter: { type: Boolean },
});

module.exports = mongoose.model("USER", userSchema);
