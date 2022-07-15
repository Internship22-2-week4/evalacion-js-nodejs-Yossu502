import AuthRoute from './Routes.js'
import AuthController from './Controller.js'
import { DBMongo } from '../../store/DBMongo.js'
import { modelsMongo } from '../../store/SchemaAndModels.js'
import Auth from '../../entity/Auth.js'
import { helpers } from '../../lib/helpers.js'
import { response } from '../../response/response.js'
import { HttpCode } from '../../response/httpcode.js'

export const authModule = (expressRoute) => {
  const authService = new DBMongo(modelsMongo)
  const authController = new AuthController(authService, Auth, helpers.comparePassword, helpers.generarToken)
  const authRoute = new AuthRoute(expressRoute, authController, response, HttpCode)
  return authRoute._router
}
