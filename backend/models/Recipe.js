const { Schema, model } = require("mongoose")

const RecipeSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    unique: true,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  ingredients: [
    {
      type: String,
      required: true,
    },
  ],
  tags: [
    {
      type: String,
      required: true,
    },
  ],
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  creation_date: {
    type: Date,
    default: Date.now,
  },
  update_date: {
    type: Date,
    default: Date.now,
  },
})

RecipeSchema.pre("validate", function (next) {
  if (this.title) {
    this.slug = slugify(this.title, { lower: true, strict: true })
  }
  next()
})

module.exports = model("Recipe", RecipeSchema)
