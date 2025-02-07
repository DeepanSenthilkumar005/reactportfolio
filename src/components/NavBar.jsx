import React, { useState, useRef, useEffect } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import { HiOutlineHome } from "react-icons/hi";
import { BsInfoSquare } from "react-icons/bs";
import { LiaGraduationCapSolid } from "react-icons/lia";
import { VscGithubProject } from "react-icons/vsc";
import { RxPerson } from "react-icons/rx";
import { HiOutlineLightBulb } from "react-icons/hi";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Reference for the menu container

  // Define the navigation items with icons and titles to add more 
  const NavItem = [
    { title: "Home", icon: <HiOutlineHome /> },
    { title: "About", icon: <BsInfoSquare /> },
    { title: "Qualification", icon: <LiaGraduationCapSolid /> },
    { title: "Skills", icon: <HiOutlineLightBulb /> },
    { title: "Project", icon: <VscGithubProject /> },
    { title: "Contact", icon: <RxPerson /> },
  ];

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section className="NavBar z-50 sticky top-0 justify-between py-4 flex h-fit w-full bg-black">
      {/* Header */}
      <p className="Heading hover:scale-105 ps-4 transition-all duration-150 ease-in-out">
        <a href="#" className="text-customWhite md:text-xl">Deepan S</a>
      </p>

      {/* Large Screen View */}
      <ul className="flex gap-8 pe-4 stm:hidden">
        {NavItem.map((item, index) => (
          <li key={index} className="text-customWhite flex hover:scale-105 transition-all duration-200 ease-in-out">
            <span className="mr-2 mt-1">{item.icon}</span>
            <a href="#" className="cursor-pointer">{item.title}</a>
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul
          ref={menuRef}
          className="right-0 top-14 h-screen md:hidden absolute w-3/5 flex-row shadow-lg shadow-gray-600 bg-white p-0"
        >
          {NavItem.map((item) => (
            <li key={item.title} className="text-customBlack flex py-4 ps-4">
              <span className="mr-2 mt-1">{item.icon}</span>
              <a href="#" className="">{item.title}</a>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default NavBar;
