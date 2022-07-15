export default class AuthController {
  constructor (authServices, entity, comparePassword, generateToken) {
    this._services = authServices
    this._entity = entity
    this._comparePassword = comparePassword
    this._generateToken = generateToken
  }

  async authenticactionUser (user) {
    console.log(user)
    try {
      const result = await this._services.findByAttribute('users', '_userName', user.username)
      console.log(result)
      console.log(user.password)
      if (result != null) {
        const resultComparePassword = await this._comparePassword(user.password, result[0]._password)
        if (resultComparePassword) {
          const tokenUser = this._generateToken(result._id)
          return new this._entity({
            state: true,
            username: result[0]._userName,
            email: result[0]._email,
            token: tokenUser,
            message: 'Login Succesfully'
          })
        } else {
          return new this._entity({
            state: false,
            username: '',
            email: '',
            token: '',
            message: 'Sus credenciales son incorrectos'
          })
        }
      } else {
        return new this._entity({
          state: false,
          username: '',
          email: '',
          token: '',
          message: 'Sus credenciales son incorrectos'
        })
      }
    } catch (error) {
      console.log(error)
      return new Error(error)
    }
  }
}
