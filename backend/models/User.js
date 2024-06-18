const { Schema, model } = require("mongoose")

const UserSchema = new Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  is_active: {
    type: Boolean,
    default: true,
  },
  is_admin: {
    type: Boolean,
    default: false,
  },
  phone: {
    type: Number,
    required: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  registration_date: {
    type: Date,
    default: Date.now(),
  },
  password: {
    type: String,
    required: true
  }
})

module.exports = model('User', UserSchema)
