import React, { useState } from 'react'; // Importing useState hook
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const NavItem = ["Home", "About", "Qualification", "Project", "Contact"];

  return (
    <section className='NavBar sticky top-0 justify-between py-4 flex h-fit w-screen bg-black'>
      <p className="Heading hover:scale-105 ps-4 transition-all duration-150 ease-in-out">
        <a href="" className='text-customWhite md:text-xl'>Deepan S</a>
      </p>

      {/* Large Screen View */}
      <ul className='flex gap-8 pe-4 stm:hidden'>
        {NavItem.map((item) => (
          <li key={item} className='text-customWhite hover:scale-105 transition-all duration-200 ease-in-out'>
            <a href="#" className='cursor-pointer'>{item}</a>
          </li>
        ))}
      </ul>

      {/* Mobile Screen View */}
      <div className="md:hidden overflow-x-hidden pe-4" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? (
          <IoCloseOutline className="text-white text-2xl" />
        ) : (
          <RxHamburgerMenu className="text-white text-2xl" />
        )}
      </div>

      {isMenuOpen && (
        <ul className='right-0 top-14 h-screen md:hidden absolute w-3/5 flex-row bg-white p-0'>
          {NavItem.map((item) => (
            <li key={item} className='text-customBlack py-4 ps-4'>
              <a href="#" className=''>{item}</a>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default NavBar;
