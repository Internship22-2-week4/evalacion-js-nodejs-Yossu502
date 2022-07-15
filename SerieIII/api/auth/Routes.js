export default class AuthRoute {
  constructor (router, controller, response, httpCode) {
    this._router = router()
    this._controller = controller
    this._response = response
    this._httpCode = httpCode
    this.registerRoutes()
  }

  registerRoutes () {
    this._router.post('/token', this.handleSingin.bind(this))
  }

  async handleSingin (req, res) {
    try {
      const result = await this._controller.authenticactionUser(req.body)
      if (result._auth) {
        this._response.succes(req, res, result, this._httpCode.OK)
      } else {
        this._response.succes(req, res, result, this._httpCode.BAD_REQUEST)
      }
    } catch (error) {
      this._response.error(req, res, error, this._httpCode.BAD_REQUEST)
    }
  }
}
