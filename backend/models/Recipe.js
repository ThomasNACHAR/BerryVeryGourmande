const { Schema, model } = require("mongoose")

const RecipeSchema = new Schema({
  title: {
    type: String,
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

module.exports = model("Recipe", RecipeSchema)
