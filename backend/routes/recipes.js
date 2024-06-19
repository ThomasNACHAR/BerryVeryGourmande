const express = require("express")
const router = express.Router()
const recipeController = require("../controllers/recipeController")
const authenticate = require("../middleware/authenticate")

router.post("/", authenticate, recipeController.createRecipe)
router.get("/", recipeController.getRecipes)
router.get("/:slug", recipeController.getRecipeBySlug)
router.put("/:slug", authenticate, recipeController.updateRecipe)
router.delete("/:slug", authenticate, recipeController.deleteRecipe)

module.exports = router
