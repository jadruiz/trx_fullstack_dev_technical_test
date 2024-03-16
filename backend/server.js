const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  res.send("Express working!");
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Successful connection to MongoDB"))
  .catch((err) => console.log("Error connection to MongoDB", err));

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server working on port ${PORT}!`);
});
