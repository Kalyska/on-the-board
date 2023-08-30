import React, { useRef, useState } from "react";
import Burger from "./Burger";
import SideBar from "./SideBar";

const Header = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();

  const handleClickOutside = event => {
    if (node.current && !node.current.contains(event.target)) {
      setOpen(false);
    }
  };

  return (
    <header ref={node} onMouseDown={handleClickOutside}>
      <Burger open={open} setOpen={setOpen} />
      <SideBar open={open} setOpen={setOpen} />
    </header>
  );
};

export default Header;