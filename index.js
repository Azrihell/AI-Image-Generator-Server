import express from 'express'
import * as dotenv from 'dotenv'
import pjson from "./package.json" assert { type: "json" };
import cors from 'cors'
import connectDB from './mongodb/connect.js'
import postRoutes from './routes/postRoutes.js'
import dalleRoutes from './routes/dalleRoutes.js'

const app = express()
app.use(cors())
app.use(express.json({ limit: '50mb' }))
app.use('/api/v1/post', postRoutes)
app.use('/api/v1/dalle', dalleRoutes)
app.env = dotenv.config().parsed

app.get('/', async (req, res) => {
  res.json({
    version: pjson.version,
    message: 'Hello from DALL-E'
  })
})

app.listen(app.env.port, app.env.HOSTNAME, async () => {
  try {
    connectDB(process.env.MONGODB_URL)
    console.log(`Server running at http://${app.env.HOSTNAME}:${port}/`);
  } catch (error) {
    console.log(error)
  }
})
