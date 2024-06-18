const { Schema, model } = require("mongoose")

const CommentSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  content: {
    type: String,
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
  recipe: {
    type: Schema.Types.ObjectId,
    ref: "Recipe",
    required: true,
  },
})

module.exports = model("Comment", CommentSchema)
