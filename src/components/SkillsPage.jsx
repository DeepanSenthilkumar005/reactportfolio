import React, { useState } from 'react';

function SkillsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Frontend");

  const Skills = [
    ["Frontend", "HTML", 85],
    ["Frontend", "CSS", 60],
    ["Frontend", "JavaScript", 75],
    ["Frontend", "ReactJS", 70],
    ["Backend", "Express.js", 20],
    ["Programming", "Java", 75],
    ["Programming", "Python", 40],
    ["Programming", "C", 60],
    ["Programming", "C#", 10],
    ["Tools", "Git", 100],
    ["Tools", "GitHub", 100],
    ["Tools", "VS Code", 100],
    ["Frameworks", "Tailwind CSS", 70],
    ["Frameworks", "Bootstrap", 30],
  ];

  // Get unique categories
  const categories = [...new Set(Skills.map(([category]) => category))];

  return (
    <section id='Skills' className="SkillPage w-full my-6 px-4 dark:text-white">
      <h1 className="text-2xl font-semibold text-center m-2 mb-5">Skills</h1>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg transition-all font-medium text-white 
              ${selectedCategory === category ? "bg-blue-600 dark:bg-customGreen" : "bg-gray-500 dark:hover:bg-customGreen hover:bg-blue-500"}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Show skills for selected category */}
      {selectedCategory &&
        Skills.filter(([category]) => category === selectedCategory).map(([_, skill, level]) => (
          <div key={skill} className="my-2 md:mx-auto md:w-1/2">
            <label htmlFor={skill} className="block dark:text-gray-300 text-gray-600 font-medium">
              {skill}
            </label>

            {/* Progress Bar (Fixed) */}
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-blue-600 dark:bg-customGreen h-2.5 rounded-full"
                style={{ width: `${level}%` }} // ✅ Fixed inline style
              ></div>
            </div>

            <span className="block text-right text-sm font-semibold dark:text-gray-300 text-gray-500">
              {level}%
            </span>
          </div>
        ))}
    </section>
  );
}

export default SkillsPage;
