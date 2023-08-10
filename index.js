// index.js
const express = require('express')

const server = express()
const PORT = 4000

server.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `)
})

server.get('/', (req, res) => {
  res.send('Hey this is my API running 🥳')
})

server.get('/about', (req, res) => {
  res.send('This is my about route..... ')
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

// server.listen({ port: server.env.PORT }, async () => {
//   try {
//     // connectDB(process.env.MONGODB_URL)
//     console.log(`Server running at http://localhost:${server.env.PORT}`);
//   } catch (error) {
//     console.log(error)
//   }
// })


// // Export the Express API
// module.exports = server