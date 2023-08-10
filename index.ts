import cors from 'cors'
import express, { Request, Response } from 'express'
import { connectDB } from "./mongodb/connect"
import { DalleRoutes } from "./api/routes-dalle"
import { PostsRoutes } from "./api/routes-posts"
import pjson from './package.json'

// AZ: Creating The Express Instance
const server: any = express()

// AZ: Adding Middleware Support
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.env = require('dotenv').config().parsed
server.use(cors())

// AZ: Creating a base route to provide a server version and to test the API is functional
server.get('/', (_req: Request, res: Response) => {
  res.status(200).json({
    version: pjson.version,
    message: 'Hello form Az! This is the API service for my DALL-E like application. Enjoy 🥳',
    url: process.env.MONGODB_URL
  })
})


// AZ: Import sub routes
// DalleRoutes(server)
// PostsRoutes(server)


// AZ: Start the express server. 
server.listen(process.env.PORT, async () => {
  try {
    connectDB(server.env.MONGODB_URL)
    console.log(`Server running at http://localhost:${process.env.PORT}`);
  } catch (error) {
    console.log(error)
  }
})


// AZ: Export the `server` instance as required for Vercel support
export default server