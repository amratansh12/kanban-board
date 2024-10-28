import "./Navbar.css";
import { useState } from "react";

import display from "../../assets/svgs/Display.svg";
import down from "../../assets/svgs/down.svg";

import { DropdownMenu } from "./DropdownMenu";

export const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <nav className="navbar">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="dropdown-toggle"
      >
        <img src={display} alt="display" width={16} />
        Display
        <img src={down} alt="down" width={16} />
        {isVisible && <DropdownMenu />}
      </button>
    </nav>
  );
};
