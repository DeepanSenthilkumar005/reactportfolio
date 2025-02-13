import { useState } from 'react';
import ProfilePhoto from "../assets/Profile1.jpg"
// import ProfilePhoto from "../assets/person.avif"
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialGithub } from "react-icons/sl";
import { TbWorld } from "react-icons/tb";
import Typewriter from './Typewriter ';
import { TfiHandPointDown } from "react-icons/tfi";
// import ScrollGif from '../assets/scroll.gif'
// import WelcomePage from './WelcomePage';

function HomePage() {
  const Links=[
    {
      name:"Linked In",
      icon:<SlSocialLinkedin />,
      link:'http://www.linkedin.com/in/deepan-senthilkumar'
    },
    {
      name:"Website",
      icon:<TbWorld />,
      link:''
    },
    {
      name:"GitHub",
      icon:<SlSocialGithub />,
      link:'https://github.com/DeepanSenthilkumar005/'
    }
  ]
  return (
      <section id='Home' className='HomePage p-4 min:h-full w-full'>
        {/* <WelcomePage /> */}
        <div className="grid stm:grid-cols-1 md:gap-2 md:grid-cols-2">
          {/* Left Content */}
          <div data-aos='fade-right' className="LeftContent my-auto flex justify-between">
            <div className="links my-auto ms-12 items-center">
              <ul className='space-y-10'>
                {
                  Links.map((link)=>(
                   <li key={link}>
                    <a href={link.link} className='dark:text-white' target="_blank" rel="noopener noreferrer"><abbr title={link.name}>{link.icon}</abbr></a>
                  </li>
                  ))
                }

              </ul>
            </div>
            <img src={ProfilePhoto} alt="Profile Photo" className='h-1/3 w-3/4 stm:w-2/3 stm:mx-auto object-cover rounded-md transition-all duration-300 ' />
          </div>
          {/* Right Content */}
          <div data-aos='fade-left' className="RightContent stm:mt-5 stm:mx-auto my-auto text-gray-900 dark:text-white max-w-4xl mx-auto">
  <div className="Content bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-300 dark:border-gray-700">
    <b className="text-3xl stm:text-2xl font-bold block text-gray-900 dark:text-white">
      Hi there!
    </b>
    <b className="text-2xl stm:text-xl font-bold flex text-gray-800 dark:text-gray-300">
      I am a&nbsp;<Typewriter />
    </b>
    <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 text-justify">
      I am <span className="font-semibold text-orange-500">Deepan</span>, Welcome to my creative corner! 
      I’m a passionate designer who thrives on transforming ideas into beautiful, functional creations.
      Whether it’s crafting elegant user interfaces, designing captivating logos, or envisioning innovative spaces, 
      I’m here to bring your vision to life.
    </p>
    <div className="mt-4 flex items-center">
      <span className="text-lg font-medium text-gray-800 dark:text-gray-300">Explore my portfolio below!</span>
      <TfiHandPointDown className="ml-2 text-2xl text-blue-600 dark:text-blue-400 animate-bounce" />
    </div>
  </div>
</div>


        </div>


      </section>
  )
}

export default HomePage