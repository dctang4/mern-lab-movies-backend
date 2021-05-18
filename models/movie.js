// import moose and destructure
const {Schema, model} = require('../db/connection')

// create movie schema
const movieSchema = new Schema(
  {
    name: String,
    img: String,
    description: String,
  }, {timestamps: true}
)

// create the model
const Movie = model('Movie', movieSchema)

module.exports = Movie


