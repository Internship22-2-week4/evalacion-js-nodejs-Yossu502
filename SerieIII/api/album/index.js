import express from 'express'
import Album from '../../entity/Album.js'
import { HttpCode } from '../../response/httpcode.js'
import { response } from '../../response/response.js'
import { DBMongo } from '../../store/DBMongo.js'
import { modelsMongo } from '../../store/SchemaAndModels.js'
import AlbumController from './Controller.js'
import AlbumRouter from './Routes.js'

export const AlbumModule = () => {
  const serviceAlbum = new DBMongo(modelsMongo)
  const albumController = new AlbumController(serviceAlbum, Album)
  const albumRouter = new AlbumRouter(express.Router, albumController, response, HttpCode)
  return albumRouter._router
}
