const projectRepository = require("../repositories/project.repository")

const fetchProjects = async () => {
    return await projectRepository.getAllProjects()
}

const addProject = async (projectData) => {
    return await projectRepository.createProject(projectData)
}

module.exports = {
    fetchProjects,
    addProject
}