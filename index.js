const express = require("express");
const dotenv = require("dotenv");
const app = express();
const users = require("./src/routes/userRoute");
const handleConnecttoDb = require("./src/db/connectDb");
dotenv.config();
const PORT = process.env.PORT || 8000;
handleConnecttoDb()
  .then((res) => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });


app.listen(PORT, () => {
  console.log("Hello Application running on port ",PORT);
});
app.use("/api/v1", users);
