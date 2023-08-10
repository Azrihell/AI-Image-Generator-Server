import { Request, Response } from 'express'
import { Configuration, OpenAIApi } from "openai"

export const DalleRoutes = (server: any) => {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
  })
  
  const openai = new OpenAIApi(configuration)

  server.post('/api/dalle', async (req: Request, res: Response) => {
    try {
      const { prompt } = req.body
      const aiResponse = await openai.createImage({
        prompt,
        n: 1,
        size: '1024x1024',
        response_format: 'b64_json'
      })
      const image = aiResponse.data.data[0].b64_json
  
      res.status(200).json({ photo: image })
    } catch (error: any) {
      console.log(error)
      res.status(500).send(error?.response.data.error.message)
    }
  })
}