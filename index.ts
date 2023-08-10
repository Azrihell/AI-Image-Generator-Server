import express, { Request, Response } from 'express'
import pjson from './package.json'

const server = express()
const port = process.env.PORT || 8080

server.get('/', (_req: Request, res: Response) => {
  return res.send(`Express Typescript on Vercel ${pjson.version}`)
})

server.get('/ping', (_req: Request, res: Response) => {
  return res.send('pong 🏓')
})

server.listen(port, () => {
  return console.log(`Server is listening on ${port}`)
})