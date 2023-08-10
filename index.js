// Vercel requires cjs (commonJs) so we're going to have to use require() and module.exports in this project to create `function` server
const cors = require('cors');
const express = require('express')
const pjson = require("./package.json")
const mongoose = require('mongoose')


const connectDB = (url) => {
  console.log("TESTING")
  // mongoose.set('strictQuery', true)
  // mongoose.connect(url)
  //   .then(() => console.log('connected to mongo'))
  //   .catch((err) => {
  //     console.error('failed to connect with mongo')
  //     console.error(err)
  //   })
}

// const connectDB = require('./mongodb/connect.js')
// const postRoutes = require( './routes/postRoutes.js')
// const dalleRoutes = require( './routes/dalleRoutes.js')


// 
// // server.use('/api/v1/post', postRoutes)
// // server.use('/api/v1/dalle', dalleRoutes)


// Create the Express Server
const server = express()
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.env = require('dotenv').config().parsed
server.use(cors())


// Create a default API route to return some useful server information
server.get('/', async (req, res) => {
  res.json({
    version: pjson.version,
    message: 'Hello form Az! This is the API service for my DALL-E like application. Enjoy 🥳',
    url: process.env.MONGODB_URL
  })
})



// Export the Express API
module.exports = server


