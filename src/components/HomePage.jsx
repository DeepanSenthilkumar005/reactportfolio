import { useState } from 'react';
import ProfilePhoto from "../assets/person.avif"


function HomePage() {
  return (
      <section className='HomePage p-4 h-screen w-screen'>
        <div className="grid stm:grid-cols-1 md:grid-cols-2">
          {/* Left Content */}
          <div className="LeftContent">
            <img src={ProfilePhoto} alt="" />
          </div>
          {/* Right Content */}
          <div className="RightContent text-white rounded-lg shadow-lg max-w-4xl mx-auto">
            <div className="Content bg-gray-800 p-8">
              <b className="text-2xl font-bold">Hi there!</b>
              <p className="mt-4 text-lg">
                I am <span className="font-semibold text-orange-500">Deepan</span>, Welcome to my creative corner! I’m a passionate designer who thrives on transforming ideas into beautiful, functional creations.
                Whether it’s crafting elegant user interfaces, designing captivating logos, or envisioning innovative spaces, I’m here to bring your vision to life.
                <span className="block mt-2">Explore my portfolio below!</span>
              </p>
            </div>

          </div>

        </div>


      </section>
  )
}

export default HomePage