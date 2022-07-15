class AlbumRouter {
  constructor (router, controller, response, httpcode) {
    this._router = router()
    this._ctrl = controller
    this._response = response
    this._httpcode = httpcode
    this.registerRoutes()
  }

  registerRoutes () {
    this._router.post('/newalbum', this.handlePostPlayList.bind(this))
  }

  handlePostPlayList (req, res) {
    const album = req.body
    console.log(album);
    const result = this._ctrl.createNewAlbum(album)
    this._response.succes(req, res, result, this._httpcode.CREATED)
  }
}

export default AlbumRouter
