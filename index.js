// index.js
const express = require('express')
const pjson = require("./package.json")
const server = express()
server.env = require('dotenv').config().parsed


server.get('/', async (req, res) => {
  res.json({
    version: pjson.version,
    message: 'Hello from DALL-E'
  })
})


server.get('/test', (req, res) => {
  res.send('Hey this is my API running 🥳')
})

server.get('/logs', (req, res) => {
  res.send(JSON.stringify(process.env))
})

server.get('/port', (req, res) => {
  res.send(JSON.stringify(process.env.PORT))
})


server.listen(process.env.PORT, async () => {
  try {
    // connectDB(process.env.MONGODB_URL)
    console.log(`Server running at http://localhost:${process.env.PORT}`);
  } catch (error) {
    console.log(error)
  }
})


// Export the Express API
module.exports = server


// const cors = require('cors')
// const express = require('express')
// const pjson = require("./package.json")
// // const connectDB = require( './mongodb/connect.js')
// // const postRoutes = require( './routes/postRoutes.js')
// // const dalleRoutes = require( './routes/dalleRoutes.js')

// const server = express()
// server.use(express.json({ limit: '50mb' }))
// server.use(express.urlencoded({ extended: true }))
// server.env = require('dotenv').config().parsed


// server.use(cors())
// // server.use('/api/v1/post', postRoutes)
// // server.use('/api/v1/dalle', dalleRoutes)


// server.get('/', async (req, res) => {
//   res.json({
//     version: pjson.version,
//     message: 'Hello from DALL-E'
//   })
// })
