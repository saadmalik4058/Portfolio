import React from "react";
import Calculator from "../assets/Calculator.png";
import Ecommerce from "../assets/Ecommerce.png";
import Portfolio from "../assets/Portfolio.png";
import Todo from "../assets/Todo.png";

const projects = [
  {
    id: 1,
    name: "Responsive Portfolio Website",
    description:
      "A personal portfolio website with responsive design, showcasing projects and skills.",
    technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    image: Portfolio,
  },
  {
    id: 2,
    name: "E-Commerce",
    description:
      "A fully functional e-commerce website with product listings, shopping cart, and admin panel.",
    technologies: ["React", "Context API", "LocalStorage", "Tailwind CSS"],
    image: Ecommerce,
  },
  {
    id: 3,
    name: "Todo App",
    description:
      "A to-do list application with features for adding and deleting tasks.",
    technologies: ["HTML", "CSS", "Javascript"],
    image: Todo,
  },

  {
    id: 4,
    name: "Calculator App",
    description:
      "A simple calculator application that performs basic arithmetic operations.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: Calculator,
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="projects">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 ">
        <h2 className="text-4xl font-bold text-center mb-12 ">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded hover:shadow-lg
              transform transition-transform duration-300 hover:scale-105 "
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 w-full h-48 object-cover "
              />
              <h2 className="text-2xl font-bold mb-2">{project.name}</h2>
              <div>
                {project.technologies.map((tech) => (
                  <div>
                    <h2 className="text-gray-400 mb-4">{tech}</h2>
                  </div>
                ))}
              </div>
              {/* <a href="">GitHub</a> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
