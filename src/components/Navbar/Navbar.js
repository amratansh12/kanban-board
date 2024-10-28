import "./Navbar.css";
import { useState } from "react";
import { ChevronDown, ChevronUp, SlidersHorizontal } from "lucide-react";
import { DropdownMenu } from "./DropdownMenu";

export const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const IconStyle = {
    height: "12px",
    width: "12px",
  };

  return (
    <nav className="navbar">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="dropdown-toggle"
      >
        <SlidersHorizontal style={IconStyle} />
        Display
        {isVisible ? (
          <ChevronUp style={IconStyle} />
        ) : (
          <ChevronDown style={IconStyle} />
        )}
        {isVisible && <DropdownMenu isVisible={isVisible} />}
      </button>
    </nav>
  );
};
