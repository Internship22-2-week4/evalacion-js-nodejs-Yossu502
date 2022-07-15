export default class Album {
  constructor (album) {
    this._id = null
    this._nameAlbum = album.nameAlbum
    this._tag = album.tag
    this.photos = []
  }
}
