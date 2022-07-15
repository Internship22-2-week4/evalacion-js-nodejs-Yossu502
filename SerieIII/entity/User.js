export default class User {
  constructor (user) {
    this._id = null
    this._userName = user.username
    this._email = user.email
    this._password = user.password
  }

  encryptPassword (password, hashPassword) {
    this._password = hashPassword(password)
  }
}
