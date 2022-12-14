import React from "react";
import { ReactComponent as Buttons } from "../Assets/Images/Buttons.svg";
import { ReactComponent as Buttons1 } from "../Assets/Images/Buttons-1.svg";
import { ReactComponent as Buttons2 } from "../Assets/Images/Buttons-2.svg";
import { ReactComponent as Buttons3 } from "../Assets/Images/Buttons-3.svg";

const BlogTitle = () => {
  return (
    <div className="title-container">
      <div className="title" id="title">
        <h1>Fun Games to Boost kids Mental Health</h1>
      </div>
      <div className="social">
        <Buttons />
        <Buttons1 />
        <Buttons2 />
        <Buttons3 />
      </div>
    </div>
  );
};

export default BlogTitle;
