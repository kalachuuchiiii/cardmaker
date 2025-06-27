require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { connectDB } = require("./src/config/connectDB.js");
const mongoose = require("mongoose");
const { preloadModels } = require("./src/config/preloadModels.js");


const app = express(); 
const preloadedModels = preloadModels();

const router = require("./src/router/index.js");

const origin = process.env.WEB_ORIGIN; 
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors({
  origin
}))
app.use("/api", router)

connectDB().then(() => {
  app.listen(PORT, () => {
  console.log(`DB CONNECTED. Listening at port ${PORT}`);
  console.log("Preloaded models, ", mongoose.modelNames());
})
}).catch((e) => {
  console.log(e);
})

module.exports = app;