// import express router and create router
const router = require('express').Router()

// import model
const Movie = require('../models/movie')

// import seed data
const moviesSeed = require('../db/seedData.json')

// ROUTES

// seed route
router.get('/seed', async (req,res) => {
  try {
    await Movie.remove({})
    await Movie.create(moviesSeed)
    const movies = await Movie.find({})
    res.json(movies)
  } catch (error) {
    res.status(400).json(error)
  }
})

// index route
router.get('/', async (req,res) => {
  try {
    const movies = await Movie.find({})
    res.json(movies)
  } catch (error) {
    res.status(400).json(error)
  }
})

// create route
router.post('/', async (req,res) => {
  try {
    const newMovie = await Movie.create(req.body)
    res.json(newMovie)
  } catch (error) {
    res.status(400).json(error)
  }
})

// update route
router.put('/:id', async (req,res) => {
  try {
    const updateMovie = await Movie.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      {new: true}
    )
    res.json(updateMovie)
  } catch (error) {
    res.status(400).json(error)
  }
})

// delete route
router.delete('/:id', async (req,res) => {
  try {
    const deletedMovie = await Movie.findByIdAndDelete(req.params.id)
    res.json(deletedMovie)
  } catch (error) {
    res.status(400).json(error)
  }
})

// export the router
module.exports = router