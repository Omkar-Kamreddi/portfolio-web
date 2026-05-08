const projectService = require("../services/project.service")

const getProjects = async (req, res) => {

    try {

        const projects = await projectService.fetchProjects()

        res.status(200).json({
            success: true,
            count: projects.length,
            data: projects
        })

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        })

    }

}

const createProject = async (req, res) => {

    try {

        const project = await projectService.addProject(req.body)

        res.status(201).json({
            success: true,
            data: project
        })

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        })

    }

}

module.exports = {
    getProjects,
    createProject
}