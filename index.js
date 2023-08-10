// Vercel requires cjs (commonJs) so we're going to have to use require() and module.exports in this project to create `function` server
const cors = require('cors');
const express = require('express')
const pjson = require("./package.json")
const connectDB = require('./mongodb/connect.js')
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


// Start the express server. 
server.listen(process.env.PORT, async () => {
  try {
    connectDB(process.env.MONGODB_URL)
    console.log(`Server running at http://localhost:${process.env.PORT}`);
  } catch (error) {
    console.log(error)
  }
})


// Export the Express API
module.exports = server


