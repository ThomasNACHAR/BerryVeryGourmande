const { Schema, model } = require("mongoose")

const NewsletterSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  newsletter_date: {
    type: Date,
    required: true,
  },
  subscribers: [
    {
      type: Schema.Types.ObjectId,
      ref: "Subscriber",
    },
  ],
})

module.exports = model("Newsletter", NewsletterSchema)
