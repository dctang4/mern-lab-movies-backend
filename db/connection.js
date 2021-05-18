// import environmental variables
require('dotenv').config()

// import dependencies
const mongoose = require('mongoose')

// pull out environmental vairable
const MONGODBURI = process.env.MONGODBURI

const config = { useUnifiedTopology: true, useNewUrlParser: true };

// establish connection to db
mongoose.connect(MONGODBURI, config)

// create db connection messages
mongoose.connection
  .on("open", () => console.log("MONGO CONNECTION IS OPEN"))
  .on("close", () => console.log("MONGO CONNECTION IS CLOSED"))
  .on("error", (error) =>
    console.log("MONGO CONNECTION ERROR \n***************\n", error)
  );

  // export mongoose
  module.exports = mongoose;