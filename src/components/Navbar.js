import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={`nav ${isOpen ? "active" : ""}`}>
      <div
        className={`nav-toggle ${isOpen ? "active" : ""}`}
        onClick={handleClick}
      >
        <span className="nav-toggle-icon"></span>
      </div>
      <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>
    </div>
  );
}
