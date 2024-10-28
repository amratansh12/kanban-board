import "./Navbar.css";
import { useState } from "react";
import { LuSlidersHorizontal } from "react-icons/lu";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { DropdownMenu } from "./DropdownMenu";

export const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const IconStyle = {
    height: "14px",
    width: "14px",
  };

  return (
    <nav className="navbar">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="dropdown-toggle"
      >
        <LuSlidersHorizontal style={IconStyle} />
        Display
        {isVisible ? (
          <FaChevronUp style={IconStyle} />
        ) : (
          <FaChevronDown style={IconStyle} />
        )}
        {isVisible && <DropdownMenu />}
      </button>
    </nav>
  );
};
