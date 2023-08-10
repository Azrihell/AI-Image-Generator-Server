const mongoose = require('mongoose')

export const connectDB = (url: string) => {
  mongoose.set('strictQuery', true)
  mongoose.connect(url)
    .then(() => console.log('connected to mongo'))
    .catch((error: any) => {
      console.error('failed to connect with mongo')
      console.error(error)
    })
}


