import React, { useState } from "react";

function ProjectsPage() {
  // JSON data for projects
  const projectsData = [
    {
      "id": 1,
      "image": "https://d33wubrfki0l68.cloudfront.net/67a456603f6f090008648d71/screenshot_2025-02-06-06-28-24-0000.webp",
      "title": "Personal Portfolio",
      "description": "A well-structured personal portfolio showcasing skills, projects, and experience using React Js and Tailwind CSS. Designed for an engaging user experience with a clean UI and responsive layout."
    },
    {
      "id": 2,
      "image": "https://d33wubrfki0l68.cloudfront.net/6717b525d63291000812b32d/screenshot_2024-10-22-14-23-02-0000.webp",
      "title": "E-Commerce Website",
      "description": "A dynamic online shopping platform featuring product listings, a shopping cart, and a checkout system. Built with React and Tailwind CSS, offering a seamless user experience with modern UI/UX principles."
    },
    {
      "id": 3,
      "image": "https://d33wubrfki0l68.cloudfront.net/678a92d1b273190008962105/screenshot_2025-01-17-17-27-19-0000.webp",
      "title": "Commercial Website",
      "description": "A business-oriented website designed for professional use, providing company details, services, and contact information. Developed with responsive design principles to ensure accessibility across devices."
    },
    {
      "id": 4,
      "image": "https://d33wubrfki0l68.cloudfront.net/671fabef4756715ecc543a1c/screenshot_2024-10-28-15-21-58-0000.webp",
      "title": "Calculator",
      "description": "A simple yet functional calculator built using React, allowing users to perform basic arithmetic operations. Designed with a user-friendly interface and interactive elements."
    },
    {
      "id": 5,
      "image": "https://d33wubrfki0l68.cloudfront.net/6741e6e05dc33d00088aeaf4/screenshot_2024-11-23-14-30-27-0000.webp",
      "title": "Chat App",
      "description": "A real-time chat application enabling users to communicate seamlessly. Features include instant messaging, user authentication, and a responsive UI for a smooth chatting experience."
    }
  ];
  

  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle previous slide
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? projectsData.length - 1 : prev - 1));
  };

  // Handle next slide
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === projectsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full dark:text-white my-6 px-4">
      <h1 className="text-2xl font-semibold text-center m-2 mb-8 md:mb-16">Projects</h1>

      {/* Carousel */}
      <div className="relative w-full max-w-3xl mx-auto">
        {/* Wrapper for Images */}
        <div className="relative h-56 md:h-96 shadow-sm shadow-black overflow-hidden rounded-lg">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className={`absolute inset-0 flex justify-center items-center transition-opacity duration-700 ${
                index === currentIndex ? "opacity-100 relative" : "opacity-0 hidden"
              }`}
            >
              <div className="relative w-full h-full group">
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="block w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-105 group-hover:blur-sm"
                />

                {/* Caption (visible on hover) */}
                <figcaption className="absolute stm:px-9 stm:text-sm inset-0 text-justify bg-black bg-opacity-25 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-lg font-semibold text-center">{project.title}</p>
                  <p className="justify-center">{project.description}</p>
                </figcaption> 
              </div>
            </div>
          ))}
        </div>

        {/* Slider controls */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 dark:bg-[#d3e5e9] dark:text-[#828a95] bg-gray-700 text-white p-2 rounded-full shadow-lg hover:bg-gray-900 transition"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 dark:bg-[#d3e5e9] dark:text-[#828a95] bg-gray-700 text-white p-2 rounded-full shadow-lg hover:bg-gray-900 transition"
        >
          ❯
        </button>

        {/* Indicators */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {projectsData.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition ${
                index === currentIndex ? "bg-blue-500 dark:bg-[#00bf63]" : "bg-gray-400 dark:bg-[#d3e5e9]"
              }`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsPage;
