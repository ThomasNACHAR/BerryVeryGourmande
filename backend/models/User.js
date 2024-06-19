const { Schema, model } = require("mongoose")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

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
    required: true,
  },
  jwt_token: {
    type: String,
  },
})

UserSchema.pre("save", async function (next) {
  const user = this
  if (!user.isModified("password")) return next()

  try {
    const hash = await bcrypt.hash(user.password, 10)
    user.password = hash
    next()
  } catch (err) {
    return next(err)
  }
})

UserSchema.methods.comparePassword = async function (candidatePassword) {
  try {
    return await bcrypt.compare(candidatePassword, this.password)
  } catch (err) {
    throw new Error(err)
  }
}

UserSchema.methods.generateJWT = function () {
  const user = this
  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
      isAdmin: user.is_admin,
    },
    process.env.JWT_KEY,
    { expiresIn: "1h" }
  )
  user.jwt_token = token
  return token
}

module.exports = model("User", UserSchema)
