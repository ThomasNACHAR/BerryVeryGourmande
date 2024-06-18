const express = require("express")
const app = express()

const mongoose = require("mongoose")
const cors = require("cors")

// MIDDLEWARES

app.use(express.json())
app.use(cors())

// MONGOOSE

mongoose
  .connect("mongodb://localhost:27017/bvg")
  .then((response) => console.log("MongoDB connected !"))
  .catch((error) => console.error(error))

// ROUTES

app.get("/", (req, res) => {
  res.send("Hello World !")
})

app.use('/users', require('./routes/users'))

// DÉMARRAGE

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log("Serveur démarré : ", PORT))
