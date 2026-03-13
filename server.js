const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const bodyParser = require("body-parser")

const app = express()

app.use(cors())
app.use(bodyParser.json())

mongoose.connect("YOUR_MONGODB_CONNECTION")

const productRoutes = require("./routes/products")

app.use("/api/products", productRoutes)

app.listen(5000, () => {
console.log("Server running")
})