// import environmental vairables
require('dotenv').config()

// import dependencies
const express = require("express");
const logger = require("morgan");
const cors = require("cors");

// other imports
const mongoose = require('./db/connection')
const moviesRouter = require('./controllers/movies')

// get port from env variables
const PORT = process.env.PORT

// create app
const app = express()

// setup middleware
app.use(cors()); // <----- add cors headers
app.use(express.json()); // <---- parses JSON bodies and adds them to req.body
app.use(logger("dev")); // <----- logging for debugging


// Routes
app.get('/', (req,res) => {
  res.json({
    status: 200,
    msg: "Default Route - Server is working"
  })
})
app.use('/movie', moviesRouter)



// server listener
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))