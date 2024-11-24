import { useState } from 'react';
import im from '../assets/name.gif';


function HomePage() {
  return (
    <div className="grid md:grid-cols-2 sm:grid-cols-1 p-5 gap-3 min-w-full">
        <div className="left md:col-span-1 font-tangerine stm:text-[2rem] md:text-[2.5rem] text-center align-middle text-slate-50 stm:order-2">
            <b className="">Frontend Developer</b>
            <p className="heading stm:text-[1.5rem]">
                Hi There <br />
                "I’m Deepan. Welcome to my creative corner! As a passionate designer, I transform ideas into beautiful, functional creations—be it user interactive webpages. Explore my portfolio below!"

            </p>
        </div>
        <div className="right h-full content-center md:col-span-1 stm:order-1">
            <img src={im} className='' alt="" />
        </div>
    </div>
  )
}

export default HomePage