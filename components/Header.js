import React, { useRef, useState } from "react";
// import Burger from "./Burger";
// import SideBar from "./SideBar";
import { MdMail } from 'react-icons/md';
import { FaDice } from 'react-icons/fa';
import { IoIosBeer } from 'react-icons/io';

// const Header = () => {
//   const [open, setOpen] = useState(false);
//   const node = useRef();

//   const handleClickOutside = event => {
//     if (node.current && !node.current.contains(event.target)) {
//       setOpen(false);
//     }
//   };

//   return (
//     <header ref={node} onMouseDown={handleClickOutside}>
//       <Burger open={open} setOpen={setOpen} />
//       <SideBar open={open} setOpen={setOpen} />
//     </header>
//   );
// };

const Header = () => {
  return (
    <header>
      {/* une barre de naviguation avec 3 liens : accueil, ludothèque et contact */}
      <nav>
        <ul>
          <li>
            <IoIosBeer />
            <a href="/">Accueil</a>
          </li>
          <li>
            <FaDice />
            <a href="/library">Ludothèque</a>
          </li>
          <li>
            <MdMail />
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}


export default Header;