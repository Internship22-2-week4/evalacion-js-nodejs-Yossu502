import mongoose from 'mongoose'

// Creando un esquema
const userSchema = new mongoose.Schema({
  _userName: {
    type: String,
    required: true
  },
  _email: {
    type: String,
    required: true
  },
  _password: {
    type: String,
    required: true
  }
})

const albumSchema = new mongoose.Schema({
  _nameAlbum: {
    type: String,
    required: true
  },
  _tag: {
    type: String,
    required: true
  },
  _photos: {
    type: [],
    required: true
  }
})

const userModel = mongoose.model('users', userSchema)
const albumModel = mongoose.model('albums', albumSchema)
export const modelsMongo = {
  users: userModel,
  albums: albumModel
}
