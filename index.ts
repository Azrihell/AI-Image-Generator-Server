import cors from 'cors'
import express, { Request, Response } from 'express'
import pjson from './package.json'

const server: any = express()
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.env = require('dotenv').config().parsed
server.use(cors())


server.get('/', (_req: Request, res: Response) => {
  return res.send(`Express Typescript on Vercel ${pjson.version}`)
})

server.get('/ping', (_req: Request, res: Response) => {
  return res.send('pong 🏓')
})

// Start the express server. 
server.listen(process.env.PORT, async () => {
  try {
    // connectDB(process.env.MONGODB_URL)
    console.log(`Server running at http://localhost:${process.env.PORT}`);
  } catch (error) {
    console.log(error)
  }
})


// Export server for Vercel support
export default server