import { Request, Response } from 'express'
import { v2 as cloudinary } from 'cloudinary'
import { PostSchema } from '../mongodb/models/post'
import * as dotenv from 'dotenv'
dotenv.config()

export const PostsRoutes = (server: any) => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  })

  server.get('/api/posts', async (req: Request, res: Response) => {
    try {
      const posts = await PostSchema.find({})
      res.status(200).json({ success: true, data: posts })
    } catch (err) {
      res.status(500).json({ success: false, message: 'Fetching posts failed, please try again' })
    }
  })
  server.post('/api/post', async (req: Request, res: Response) => {
    try {
      const { name, prompt, photo } = req.body
      const photoUrl = await cloudinary.uploader.upload(photo)
  
      const newPost = await PostSchema.create({
        name,
        prompt,
        photo: photoUrl.url
      })
  
      res.status(200).json({ success: true, data: newPost })
    } catch (err) {
      res.status(500).json({ success: false, message: 'Unable to create a post, please try again' })
    }
  })
}