const express = require("express")
const app = express()

const mongoose = require("mongoose")
const cors = require("cors")

// MIDDLEWARES

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
  res.send("Hello World !")
})

// DÉMARRAGE

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log("Serveur démarré : ", PORT))






