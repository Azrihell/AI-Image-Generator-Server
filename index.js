const express = require('express')
const app = express()
const PORT = 4000

app.get('/', (req, res) => {
  res.send('Hey this is my API running 🥳')
})

app.get('/version', (req, res) => {
  res.json({
    version: `v${pjson?.version}` || "v1.0.0",
    message: 'Hello from DALL-E'
  })
})


app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `)
})

module.exports = app

// import express from 'express'
// import * as dotenv from 'dotenv'
// import pjson from "./package.json" assert { type: "json" };
// import cors from 'cors'
// import connectDB from './mongodb/connect.js'
// import postRoutes from './routes/postRoutes.js'
// import dalleRoutes from './routes/dalleRoutes.js'

// const app = express()
// app.use(cors())
// app.use(express.json({ limit: '50mb' }))
// app.use('/api/v1/post', postRoutes)
// app.use('/api/v1/dalle', dalleRoutes)
// app.env = dotenv.config().parsed

// app.get('/', async (req, res) => {
//   res.json({
//     version: `v${pjson?.version}` || "v1.0.0",
//     message: 'Hello from DALL-E'
//   })
// })

// app.listen(app.env.PORT, app.env.HOSTNAME, async () => {
//   try {
//     connectDB(process.env.MONGODB_URL)
//     console.log(`Server running at http://${app.env.HOSTNAME}:${app.env.PORT}/`);
//   } catch (error) {
//     console.log(error)
//   }
// })
