export default class UserRouter {
  constructor (router, controller, response, httpCode, createUserValidation) {
    this._router = router() // instancia del enrutador de express
    this._ctrl = controller
    this._response = response
    this._httpCode = httpCode
    this._checkUser = createUserValidation
    this.registerRoutes()
  }

  registerRoutes () {
    this._router.post('/register', this._checkUser, this.handleSingUp.bind(this))
  }

  async handleSingUp (req, res) {
    try {
      const result = await this._ctrl.createNewUser(req.body)
      this._response.succes(req, res, result, this._httpCode.CREATED)
    } catch (error) {
      this._response.error(req, res, error, this._httpCode.BAD_REQUEST)
    }
  }
}
