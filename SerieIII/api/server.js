import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
// import swaggerUI from 'swagger-ui-express'
import YAML from 'yamljs'

import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

import { userModule } from './user/index.js'
import { authModule } from './auth/index.js'
import { AlbumModule } from './album/index.js'

class Server {
  constructor (config) {
    this._app = express()
    this._port = config.port
    this._hostname = config.hostname
    this._name = config.name
    this._dirname = dirname(fileURLToPath(import.meta.url)) // almacena el directorio del servidor
    this._swaggerFile = YAML.load(join(dirname(fileURLToPath(import.meta.url)), '../docs/swagger.yaml'))
    this.setMiddlewares()
    this.setRoutes()
  }

  setMiddlewares () {
    this._app.use(express.json())
    this._app.use(express.urlencoded({ extended: true }))
    this._app.use(cors())
    this._app.use(morgan('dev'))
  }

  setRoutes () {
    // this._app.use('/api/v1/docs', swaggerUI.serve, swaggerUI.setup(this._swaggerFile))
    // this._app.use('/api/v1/song', SongModule())
    // this._app.use('/api/v1/artist', ArtistModule())
    this._app.use('/api/v1/user', userModule(express.Router))
    this._app.use('/api/v1/album', AlbumModule())
    this._app.use('/api/v1/auth', authModule(express.Router))
  }

  start () {
    this._app.set('hostname', this._hostname)
    this._app.listen(this._port, () => {
      console.log(`${this._name} is running en http://${this._hostname}:${this._port}`)
    })
  }
}

export default Server
