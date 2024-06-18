const { Schema, model } = require("mongoose")

const TourSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
  tour_date: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  seats: {
    type: Number,
    required: true,
  },
})

module.exports = model("Tour", TourSchema)
