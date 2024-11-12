import React from 'react';

function NavBar() {
  const titles = {
    name: ['home', 'about', 'skill'],
    link: ['q', 'w', 'e']
  };      
  
  return (
    <div>
      <ul>
        {titles.name.map((name, index) => (
          <li className="" key={index}>
            <a className='hover:scale-110 duration-150' href={titles.link[index]}>{name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavBar;
