const User = require("../models/User")

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

exports.createUser = async (req, res) => {
  const user = new User({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    phone: req.body.phone,
    password: req.body.password,
  })

  try {
    const newUser = await user.save()
    res.status(201).json(newUser)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    if (user == null) {
      return res.status(404).json({ message: "User not found" })
    }
    res.json(user)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    if (user == null) {
      return res.status(404).json({ message: "User not found" })
    }

    if (req.body.first_name != null) {
      user.first_name = req.body.first_name
    }
    if (req.body.last_name != null) {
      user.last_name = req.body.last_name
    }
    if (req.body.email != null) {
      user.email = req.body.email
    }
    if (req.body.phone != null) {
      user.phone = req.body.phone
    }
    if (req.body.password != null) {
      user.password = req.body.password
    }

    const updatedUser = await user.save()
    res.json(updatedUser)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    if (user == null) {
      return res.status(404).json({ message: "User not found" })
    }

    await user.remove()
    res.json({ message: "Deleted user" })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}
