import { useState } from 'react';
import ProfilePhoto from "../assets/person.avif"
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialGithub } from "react-icons/sl";
import { TbWorld } from "react-icons/tb";
import Typewriter from './Typewriter ';
import { TfiHandPointDown } from "react-icons/tfi";
import ScrollGif from '../assets/scroll.gif'
import WelcomePage from './WelcomePage';

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
      <section className='HomePage p-4 min:h-full w-full'>
        {/* <WelcomePage /> */}
        <div className="grid stm:grid-cols-1 md:grid-cols-2">
          {/* Left Content */}
          <div className="LeftContent my-auto flex justify-between">
            <div className="links my-auto ms-12 items-center">
              <ul className='space-y-10'>
                {
                  Links.map((link)=>(
                   <li key={link}>
                    <a href={link.link} target="_blank" rel="noopener noreferrer"><abbr title={link.name}>{link.icon}</abbr></a>
                  </li>
                  ))
                }

              </ul>
            </div>
            <img src={ProfilePhoto} alt="Profile Photo" className='h-1/2 w-3/4 md:grayscale md:hover:grayscale-0  transition-all duration-300 ' />
          </div>
          {/* Right Content */}
          <div className="RightContent stm:mx-auto my-auto text-white max-w-4xl mx-auto">
            <div className="Content bg-gray-600 p-8 rounded-lg shadow-lg ">
              <b className="text-2xl stm:text-xl font-bold block">Hi there! </b>
              {/* <b className="text-2xl font-bold">I am a</b> */}
              <b className="text-2xl stm:text-xl font-bold flex">I am a&nbsp;<Typewriter /></b>
              <p className="mt-4 text-lg text-justify">
                I am <span className="font-semibold text-orange-500">Deepan</span>, Welcome to my creative corner! I’m a passionate designer who thrives on transforming ideas into beautiful, functional creations.
                Whether it’s crafting elegant user interfaces, designing captivating logos, or envisioning innovative spaces, I’m here to bring your vision to life.
                <span className=" mt-2 flex">
                  Explore my portfolio below!
                  <TfiHandPointDown className='mt-1 ms-2 text-xl scroll-img'  />
                  {/* <img src={ScrollGif} alt=""  className="h-4" srcset="" /> */}
                </span>
              </p>
            </div>

          </div>

        </div>


      </section>
  )
}

export default HomePage