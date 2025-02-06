import React, { useState } from "react";

function ProjectsPage() {
  // JSON data for projects
  const projectsData = [
    { id: 1, image:"https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/67a456603f6f090008648d71/screenshot_2025-02-06-06-28-24-0000.webp&fit=cover&h=500&q=40&w=800"
      , title: "Project One" },
    { id: 2, image:"https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/6717b525d63291000812b32d/screenshot_2024-10-22-14-23-02-0000.webp&fit=cover&h=500&q=40&w=800"
      , title: "Project Two" },
    { id: 3, image:"https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/678a92d1b273190008962105/screenshot_2025-01-17-17-27-19-0000.webp&fit=cover&h=500&q=40&w=800"
      , title: "Project Three" },
    { id: 4, image:"https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/671fabef4756715ecc543a1c/screenshot_2024-10-28-15-21-58-0000.webp&fit=cover&h=500&q=40&w=800"
      , title: "Project Four" },
    { id: 5, image:"https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/6741e6e05dc33d00088aeaf4/screenshot_2024-11-23-14-30-27-0000.webp&fit=cover&h=500&q=40&w=800"
      , title: "Project Five" },
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
    <section className="w-full my-6 px-4">
      <h1 className="text-2xl font-semibold text-center m-2">Projects</h1>

      {/* Carousel */}
      <div className="relative w-full max-w-3xl mx-auto">
        {/* Wrapper for Images */}
        <div className="relative h-56 md:h-96 overflow-hidden rounded-lg">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className={`absolute inset-0 flex justify-center items-center transition-opacity duration-700 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="block w-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* Slider controls */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow-lg hover:bg-gray-900 transition"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow-lg hover:bg-gray-900 transition"
        >
          ❯
        </button>

        {/* Indicators */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {projectsData.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition ${
                index === currentIndex ? "bg-blue-500" : "bg-gray-400"
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
