import React from "react";
import "../Assets/CSS/Dropdown.css";

const Dropdown = () => {
  return (
    <div className="dropdown">
      <nav role="navigation" className="primary-navigation">
        <ul>
          <li>
            <a href="#">Navigate </a>
            <ul className="dropdown">
              <li>
                <a href="#">Intro</a>
              </li>
              <li>
                <a href="#">Red Rover</a>
              </li>
              <li>
                <a href="#">Gymnastic Talent Show</a>
              </li>
              <li>
                <a href="#">Elimination Running</a>
              </li>
              <li>
                <a href="#">Conclusion</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Dropdown;
