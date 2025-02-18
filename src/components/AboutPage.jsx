import React from 'react'
import Resume from '../assets/Resume.pdf'
import { FaCloudDownloadAlt } from "react-icons/fa";

function AboutPage() {
  return (
    <section id='About' data-aos='fade-up' className='AboutPage dark:text-white justify-items-center w-full md:min:h-full p-4'>
      <div className="Heading text-2xl stm:text-xxl font-semibold text-center m-2">
        My Introduction
      </div>
      <div className="Content shadow-lg cursor-pointer text-justify text-xl stm:text-lg h-fit md:w-2/3  rounded-lg font-medium border  border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 p-4">
      I’m Deepan, a dynamic and business-minded designer and developer from Tiruchengode. I thrive on transforming ideas into beautiful, functional creations, whether it’s crafting elegant user interfaces, designing captivating logos, or envisioning innovative solutions.

With expertise in multiple programming languages, I am cooperative and passionate about delivering high-quality software products. My goal is to bring visions to life through creativity, technology, and precision.
      </div>

      <div className="Resume w-full mt-4 justify-items-center">
        <div className="border dark:border-customGreen dark:hover:bg-customGreen border-blue-600 p-3 rounded-l-xl rounded-r-xl hover:bg-blue-600 cursor-pointer hover:text-white">
          <a href={Resume} className='flex' download="Deepan-CV.pdf">Download CV <i className='ms-2 mt-1'><FaCloudDownloadAlt /></i></a>
        </div>
        
      </div>
      
    </section>
  )
}

export default AboutPage