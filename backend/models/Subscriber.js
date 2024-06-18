const { Schema, model } = require("mongoose")

const SubscriberSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  newsletters: [
    {
      type: Schema.Types.ObjectId,
      ref: "Newsletter",
    },
  ],
})

module.exports = model("Subscriber", SubscriberSchema)
