import UserController from './Controller.js'
import UserRouter from './Routes.js'
import { DBMongo } from '../../store/DBMongo.js'
import { modelsMongo } from '../../store/SchemaAndModels.js'
import User from '../../entity/User.js'
import { helpers } from '../../lib/helpers.js'
import { response } from '../../response/response.js'
import { HttpCode } from '../../response/httpcode.js'
import { validateCreateUser } from './validate.js'

export const userModule = (expressRouter) => {
  const userServices = new DBMongo(modelsMongo)
  const userController = new UserController(userServices, User, helpers.encryptPassword)
  const userRouter = new UserRouter(expressRouter, userController, response, HttpCode, validateCreateUser)
  return userRouter._router
}
