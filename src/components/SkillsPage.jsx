import React, { useState } from "react";
import Apache_NetBeans_Logo from "../assets/Apache_NetBeans_Logo.png";
import tailwind_css_logo from "../assets/tailwind-css-logo.png";

function SkillsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Frontend");

  const Skills = [
    [
      "Frontend",
      "HTML",
      85,
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    ],
    [
      "Frontend",
      "CSS",
      60,
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    ],
    [
      "Frontend",
      "JavaScript",
      75,
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    ],
    [
      "Frontend",
      "React JS",
      70,
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    ],
    [
      "Backend",
      "Express.js",
      20,
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    ],
    [
      "Backend",
      "MongoDB",
      70,
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    ],
    [
      "Backend",
      "MYSQL",
      60,
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    ],
    [
      "Backend",
      "SupaBase",
      30,
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
    ],
    [
      "Programming",
      "Java",
      75,
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    ],
    [
      "Programming",
      "Python",
      40,
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    ],
    [
      "Tools",
      "Git",
      80,
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    ],
    [
      "Tools",
      "GitHub",
      90,
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    ],
    [
      "Tools",
      "VS Code",
      100,
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    ],
    ["Tools", "Apache NetBeans", 100, Apache_NetBeans_Logo],
    // ["Tools", "Apache NetBeans", 100, "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg"],
    [
      "Tools",
      "Eclipse",
      100,
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg",
    ],
    ["Frameworks", "Tailwind CSS", 70, tailwind_css_logo],
    [
      "Frameworks",
      "Bootstrap",
      40,
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    ],
  ];

  // Get unique categories
  const categories = [...new Set(Skills.map(([category]) => category))];

  // Function to get proficiency text based on level
  const getProficiencyText = (level) => {
    if (level >= 80) return "Expert";
    if (level >= 60) return "Proficient";
    if (level >= 40) return "Intermediate";
    return "Beginner";
  };

  return (
    <section
      id="Skills"
      className="skills-section w-full py-12 px-4 md:px-8 bg-gray-50 dark:bg-black flex"
    >
      <div className="max-w-6xl mx-auto flex flex-col">
        <h1 className="text-4xl font-bold text-center mb-2 text-gray-800 dark:text-white">
          Skills & Technologies
        </h1>
        <p className="text-lg text-center mb-10 text-gray-600 dark:text-gray-300">
          Here's what I work with
        </p>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-3 rounded-xl transition-all duration-300 font-medium text-white 
                ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 dark:from-green-500 dark:to-teal-600 shadow-lg"
                    : "bg-gray-400 dark:bg-gray-700 dark:hover:bg-green-600 hover:bg-blue-500"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-3xl">
          {selectedCategory &&
            Skills.filter(([category]) => category === selectedCategory).map(
              ([_, skill, level, iconUrl]) => (
                <div
                  key={skill}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center justify-between h-full"
                >
                  {/* Icon Container - Centered */}
                  <div className="flex flex-col items-center justify-center flex-grow">
                    <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-700 p-3">
                      <img
                        src={iconUrl}
                        alt={skill}
                        className="w-10 h-10 object-contain"
                        onError={(e) => {
                          e.target.src =
                            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg";
                        }}
                      />
                    </div>

                    {/* Skill Name - Centered */}
                    <h3 className="text-lg font-semibold text-center text-gray-800 dark:text-white mb-4">
                      {skill}
                    </h3>
                  </div>

                  {/* Proficiency Indicator - Centered at bottom */}
                  <div className="w-full flex flex-col items-center">
                    {/* Proficiency Level Indicator */}
                    <div className="flex justify-between items-center w-full mt-2 ms-2">
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                        {getProficiencyText(level)}
                      </span>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full ${
                              i < Math.floor(level / 20)
                                ? "bg-blue-500 dark:bg-green-400"
                                : "bg-gray-300 dark:bg-gray-600"
                            }`}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
        </div>
      </div>
    </section>
  );
}

export default SkillsPage;
