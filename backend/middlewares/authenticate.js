const jwt = require("jsonwebtoken")
const User = require("../models/User")

const authenticate = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "")
    if (!token) {
      throw new Error("Authentification échouée")
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const user = await User.findOne({ _id: decoded.id, jwt_token: token })

    if (!user) {
      throw new Error("Utilisateur non trouvé")
    }

    req.user = user
    req.token = token
    next()
  } catch (err) {
    res.status(401).json({ message: "Authentification échouée" })
  }
}

module.exports = authenticate
