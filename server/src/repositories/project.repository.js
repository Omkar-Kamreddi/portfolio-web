const Project = require("../models/Project")

const getAllProjects = async () => {
    return await Project.find().sort({ createdAt: -1 })
}

const createProject = async (projectData) => {
    return await Project.create(projectData)
}

module.exports = {
    getAllProjects,
    createProject
}