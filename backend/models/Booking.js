const { Schema, model } = require("mongoose")

const BookingSchema = new Schema({
  booking_date: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  tour: {
    type: Schema.Types.ObjectId,
    ref: "Tour",
    required: true,
  },
})

module.exports = model("Booking", BookingSchema)
