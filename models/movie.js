// import moose and destructure
const {Schema, model} = require('../db/connection')

// create movie schema
const movieSchema = new Schema(
  {
    name: {type: String, required:true},
    img: {type: String, required:true},
    description: {type: String, required:true},
  }, {timestamps: true}
)

// create the model
const Movie = model('Movie', movieSchema)

module.exports = Movie


