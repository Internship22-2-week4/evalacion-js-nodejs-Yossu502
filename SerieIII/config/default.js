import dotenv from 'dotenv'

dotenv.config()

export const config = {
  api: {
    port: process.env.PORT || 4000,
    hostname: process.env.HOSTNAME || 'localhost',
    name: process.env.NAME || 'App-Spotplay'
  },
  db: {
    host: process.env.DB_HOST || 'localhost'
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'secret'
  },
  dbmongo: {
    uri: process.env.MONGO_URI || 'mongodb://localhost:27017/app'
  }
}
