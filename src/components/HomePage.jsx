import { useState } from 'react';
import ProfilePhoto from "../assets/Deepan_Profile.png"
import Typewriter from './Typewriter ';
import { TfiHandPointDown } from "react-icons/tfi";

function HomePage() {
  return (
    <section id='Home' className='HomePage min-h-screen flex items-center justify-center py-12 px-4 dark:bg-black'>
      <div className="max-w-4xl w-full mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Profile Image */}
          <div className="flex justify-center w-full md:w-2/5">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <img 
                src={ProfilePhoto} 
                alt="Profile Photo" 
                className="relative w-64 h-64 md:w-72 md:h-72 object-cover rounded-lg border-4 border-white dark:border-gray-800 shadow-xl z-10 transform transition duration-300 hover:scale-105" 
              />
            </div>
          </div>

          {/* Introduction Text */}
          <div className="bg-white dark:bg-black p-6 md:p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 w-full md:w-3/5 backdrop-blur-sm ">
            <div className="mb-4">
              <span className="text-2xl md:text-3xl font-bold dark:text-white">
                Hi there! 👋
              </span>
            </div>
            
            <div className="flex flex-wrap items-center mb-5">
              <span className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-200 mr-2">
                I am a
              </span>
              <div className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-400">
                <Typewriter />
              </div>
            </div>
            
            <p className="text-gray-700 dark:text-gray-300 text-justify leading-relaxed mb-6 text-lg">
              I am <span className="font-semibold text-orange-500 dark:text-orange-400">Deepan</span>, welcome to my creative corner! 
              I'm a passionate designer who thrives on transforming ideas into beautiful, functional creations.
              Whether it's crafting elegant user interfaces, designing captivating logos, or envisioning innovative spaces, 
              I'm here to bring your vision to life.
            </p>
            
            <div className="flex items-center mt-8 pt-5 border-t border-gray-200 dark:border-gray-700">
              <span className="text-gray-700 dark:text-gray-300 font-medium text-lg">Explore my portfolio below!</span>
              <TfiHandPointDown className="ml-3 text-xl text-blue-600 dark:text-blue-400 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;