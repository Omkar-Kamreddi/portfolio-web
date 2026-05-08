const express = require("express")

const router = express.Router()

const projectRoutes = require("./project.routes")
const contactRoutes = require("./contact.routes")

router.use("/projects", projectRoutes)

router.use("/contact", contactRoutes)

module.exports = router