import React, { useState, useEffect } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import Resume from '../assets/Resume.pdf';

function NavBar() {
  const titles = {
    name: ['home', 'about', 'skill', 'project', 'contact'],
    link: ['#home', '#about', '#skill', '#project', '#contact'] // Use actual anchors or routes
  };

  const [showToggle, setShowToggle] = useState(false);
  const [focus, setFocus] = useState(titles.name[0]);

  const handleResize = () => {
    if (showToggle && window.matchMedia("(max-width: 768px)").matches) {
      setShowToggle(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [showToggle]);

  return (
    <div className="w-screen z-0 sticky md:justify-between md:flex p-4">
      <div className="brand md:w-32 stm:flex stm:justify-between">
        <ul>
          <li className='md:hover:translate-x-3 duration-300 ease-in-out'>
            <a href="#" className="brand-link uppercase text-slate-100 text-cstext">
              <p>Deepan S</p>
            </a>
          </li>
        </ul>

        <div className="toggle-button stm:mt-1 stm:text-end md:hidden">
          <button onClick={() => setShowToggle(!showToggle)}>
            <RxHamburgerMenu className='text-slate-50' />
          </button>
        </div>
      </div>

      <ul className={`overflow-hidden transition-all duration-500 pe-2 ease-in-out ${showToggle ? 'stm:max-h-screen stm:gap-y-2 stm:opacity-100 stm:mt-5' : 'stm:max-h-0 stm:opacity-0'} stm:flex-col gap-5 text-slate-50 text-center mx-auto md:flex md:gap-9 md:justify-end md:w-full`}>
        {titles.name.map((name, index) => (
          <li className="hover:scale-110 md:hover:translate-y-1 hover:font-medium duration-300" key={index}>
            <a className={`uppercase ${focus === name ? 'md:underline underline-offset-8' : ''} text-cstext hover:text-white`} onClick={() => setFocus(name)} href={titles.link[index]}>{name}</a>
          </li>
        ))}
        <li className="hover:scale-110 md:hover:translate-y-1 hover:font-medium duration-300">
          <a className="uppercase text-cstext hover:text-white" download="Resume.pdf" href={Resume}>Hire me</a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
