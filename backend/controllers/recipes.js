const Recipe = require("../models/Recipe")
const Comment = require("../models/Comment")
const slugify = require("slugify")

async function generateUniqueSlug(title, id = null) {
  let slug = slugify(title, { lower: true, strict: true })
  let slugExists = await Recipe.findOne({ slug, _id: { $ne: id } })
  let count = 1
  while (slugExists) {
    slug = `${slug}-${count}`
    slugExists = await Recipe.findOne({ slug, _id: { $ne: id } })
    count++
  }
  return slug
}

exports.createRecipe = async (req, res) => {
  const { title, content, ingredients, tags } = req.body
  const author = req.user._id

  try {
    const slug = await generateUniqueSlug(title)
    const newRecipe = new Recipe({
      title,
      slug,
      content,
      ingredients,
      tags,
      author,
    })
    await newRecipe.save()
    res.status(201).json(newRecipe)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

exports.getRecipeBySlug = async (req, res) => {
  const { slug } = req.params

  try {
    const recipe = await Recipe.findOne({ slug }).populate(
      "author",
      "first_name last_name"
    )
    if (!recipe) return res.status(404).json({ message: "Recette non trouvée" })

    res.json(recipe)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

exports.updateRecipe = async (req, res) => {
  const { slug } = req.params
  const { title, content, ingredients, tags } = req.body

  try {
    const recipe = await Recipe.findOne({ slug })
    if (!recipe) return res.status(404).json({ message: "Recette non trouvée" })

    if (title && title !== recipe.title) {
      recipe.slug = await generateUniqueSlug(title, recipe._id)
    }

    recipe.title = title || recipe.title
    recipe.content = content || recipe.content
    recipe.ingredients = ingredients || recipe.ingredients
    recipe.tags = tags || recipe.tags
    recipe.update_date = Date.now()

    await recipe.save()
    res.json(recipe)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

exports.deleteRecipe = async (req, res) => {
  const { slug } = req.params

  try {
    const recipe = await Recipe.findOne({ slug })
    if (!recipe) return res.status(404).json({ message: "Recette non trouvée" })

    await recipe.remove()
    res.json({ message: "Recette supprimée avec succès" })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}
