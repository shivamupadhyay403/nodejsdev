const express = require("express");
const dotenv = require("dotenv");
const app = express();
const users = require("./src/routes/userRoute");
const handleConnecttoDb = require("./src/db/connectDb");
dotenv.config();
handleConnecttoDb()
  .then((res) => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(process.env.PORT, () => {
  console.log("Hello Application running on port ", process.env.PORT);
});
app.use("/api/v1", users);
