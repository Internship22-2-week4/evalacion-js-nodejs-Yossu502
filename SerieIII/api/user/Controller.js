class UserController {
  constructor (serviceUser, user, hashPassword) {
    this._service = serviceUser
    this._entity = user
    this._hashPassword = hashPassword
  }

  async createNewUser (user) {
    try {
      const newUser = new this._entity(user)
      newUser.encryptPassword(user.password, this._hashPassword)
      console.log(newUser)
      const response = await this._service.save('users', newUser)
      return response
    } catch (error) {
      console.log(error)
      return new Error('create new user failed')
    }
  }
}

export default UserController
