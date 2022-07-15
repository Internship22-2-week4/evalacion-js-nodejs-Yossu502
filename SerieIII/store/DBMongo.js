import mongoose from 'mongoose'
import { config } from '../config/default.js'
// import { modelsMongo } from './SchemaAndModels.js'

export class DBMongo {
  constructor (models) {
    this.setConnection()
    this._modelsDB = models
  }

  async setConnection () {
    try {
      const db = await mongoose.connect(config.dbmongo.uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
      console.log(`MongoDB connected: ${db.connection.host}`)
    } catch (error) {
      console.log(error)
    }
  }

  async save (model, data) {
    console.log('DB MONGO')
    console.log(data)
    const newUser = this._modelsDB[model](data)
    const rest = await newUser.save()
    console.log(rest)
    return 'Item added successfully'
  }

  async findByAttribute (model, attribute, value) {
    try {
      const findByAttribute = await this._modelsDB[model].find({ [attribute]: value })
      if (findByAttribute.length > 0) {
        return findByAttribute
      }
      return `no item of ${model}`
    } catch (error) {
      console.log(error)
      return `no item of ${model}`
    }
  }
}

// const mongo = await new DBMongo(modelsMongo)
// const result = await mongo.findByAttribute('users', '_userName', 'Pbalots')
// console.log(result)

// const resultado = await mongo.save('user', {
//   _username: 'Yossu50',
//   _email: 'joaosj@gmail.com',
//   _password: 'fsadjkdaj123'
// })

// console.log(resultado)
