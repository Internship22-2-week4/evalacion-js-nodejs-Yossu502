class AlbumController {
  constructor (servicesAlbum, album) {
    this._service = servicesAlbum
    this._entity = album
  }

  createNewAlbum (album) {
    const newAlbum = new this._entity(album)
    console.log(newAlbum)
    const response = this._service.save('albums', newAlbum)
    return response
  }
}

export default AlbumController
