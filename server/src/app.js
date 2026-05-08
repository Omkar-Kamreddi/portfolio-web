const express = require("express")
const cors = require("cors")

const routes = require("./routes")

const app = express()

// Middlewares
app.use(cors())
app.use(express.json())

// Health Route
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Portfolio API Running"
    })
})

// API Routes
app.use("/api/v1", routes)

module.exports = app