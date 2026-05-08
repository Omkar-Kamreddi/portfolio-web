const mongoose = require("mongoose");

const Project = require("./models/Project");

mongoose.connect(
    "mongodb+srv://omkar:Omkar123@cluster0.s1twkx3.mongodb.net/portfolio?retryWrites=true&w=majority&appName=Cluster0"
)
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log(err);
});

const projects = [

    {
        title: "Skin Disease Detection Using Machine Learning",

        description:
            "Designed and developed a responsive front-end interface for a machine learning-based system. Implemented image upload, result visualization, and user interaction while collaborating with the ML pipeline to display prediction results clearly and intuitively.",

        techStack: [
            "Python",
            "TensorFlow",
            "OpenCV",
            "HTML",
            "CSS",
            "JavaScript"
        ]
    },

    {
        title: "E-Commerce Management System",

        description:
            "Developed a Java-based e-commerce management system to handle product and employee data efficiently. Implemented backend logic using Spring MVC, Hibernate, and Jakarta Servlets with PostgreSQL integration.",

        techStack: [
            "Java",
            "Spring MVC",
            "PostgreSQL",
            "Hibernate",
            "Jakarta Servlet"
        ]
    },

    {
        title: "Library Management System",

        description:
            "Developed RESTful APIs to manage users, books, and borrowing/return operations. Implemented business logic using Spring Boot and Spring Data JPA with PostgreSQL for data persistence.",

        techStack: [
            "Java",
            "Spring Boot",
            "Spring Data JPA",
            "PostgreSQL",
            "REST API",
            "Postman"
        ]
    }

];

const seedProjects = async () => {

    try {

        await Project.deleteMany();

        await Project.insertMany(projects);

        console.log("Projects Inserted");

        process.exit();

    } catch (error) {

        console.log(error);

        process.exit(1);

    }

};

seedProjects();