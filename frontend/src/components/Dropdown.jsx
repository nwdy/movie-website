import { useState } from "react";
import '../styles/Dropdown.css';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
      setIsOpen(!isOpen);
  };

  return (
      <div className="dropdown">
          <button className="dropdown-button" onClick={toggleDropdown}>
              Menu
          </button>
          {isOpen && (
              <div className="dropdown-content">
                  <a href="#action1">Action 1</a>
                  <a href="#action2">Action 2</a>
                  <a href="#action3">Action 3</a>
              </div>
          )}
      </div>
  );
};

export default Dropdown;