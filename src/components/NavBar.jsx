import React, { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";

function NavBar() {
  const [showToggle, setShowToggle] = useState(false);
  const titles = {
    name: ['home', 'about', 'skill', 'project', 'contact'],
    link: ['h', 'a', 's', 'p', 'c']
  };

  return (
    <div className="w-screen md:justify-between md:flex p-2 bg-gray-300">
      <div className="brand w-full stm:flex stm:justify-between md:hover:translate-x-3 duration-300 ease-out">
        <a href="#" className="brand-link text-lg">
          Deepan S
        </a>
        <div className="toggle-button stm:mt-1 stm:text-end md:hidden">
          <button onClick={() => setShowToggle(!showToggle)}>
            <RxHamburgerMenu />
          </button>
        </div>
      </div>

      <ul className={`overflow-hidden transition-all duration-500 ease-linear ${showToggle ? 'max-h-screen gap-y-2 opacity-100 mt-5' : 'stm:max-h-0 stm:opacity-0'} stm:flex-col gap-3 text-center mx-auto md:flex md:gap-5 md:justify-end md:w-full`}>
        {titles.name.map((name, index) => (
          <li className="hover:scale-105 md:hover:translate-y-1 hover:font-medium duration-150" key={index}>
            <a className="uppercase hover:text-amber-950" href={titles.link[index]}>{name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavBar;
