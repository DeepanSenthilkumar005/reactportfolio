import React from "react";

function WelcomePage({ isVisible, setIsVisible }) {
  if (!isVisible) return null; // Hide if isVisible is false

  return (
    <section className="PopUpPage h-screen w-screen p-4 flex">
      <div className="max-w-sm m-auto p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          I am Deepan
        </h5>
        <p className="mb-3 font-normal text-gray-500 text-justify dark:text-gray-400">
            "Welcome to my personal portfolio! 🚀 Explore my projects, skills, and experiences. Feel free to look around, and let’s connect to create something amazing together!"
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        >
          Continue
        </button>
      </div>
    </section>
  );
}

export default WelcomePage;
