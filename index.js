const express = require("express");
const dotenv = require("dotenv");
const app = express();
const users = require("./src/routes/userRoute");
dotenv.config();

app.listen(process.env.PORT, () => {
  console.log("Hello Application running on port ", process.env.PORT);
});
app.use("/api/v1", users);
