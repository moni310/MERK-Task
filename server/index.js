"use strict";
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

const user_name=process.env.userName
const user_password=process.env.userPassword

let host =process.env.host

const port = process.env.port || 4000;

app.use(cors({ origin: true }));
app.set("strict routing", true);
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({ message: "api working fine " });
});

app.use("/api", require("./source/module/auth/authRoute"));
app.use("/api", require("./source/module/blogs/blogRoute"));
process.on("warning", (e) => console.warn(e.stack));
mongoose.set("debug", true);
mongoose.connect( `mongodb+srv://Moni:moni123@cluster0.h1c9u.mongodb.net/MernProject?retryWrites=true&w=majority`)
  .then(() => {
    app.listen(port, () => {
      console.log(`server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
