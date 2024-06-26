const express = require("express")
const router = express.Router()
const usersController = require("../controllers/users")

router.get("/", usersController.getAllUsers)
router.post("/", usersController.createUser)
router.get("/:id", usersController.getUserById)
router.put("/:id", usersController.updateUser)
router.delete("/:id", usersController.deleteUser)
router.post("/login", usersController.loginUser)

module.exports = router
