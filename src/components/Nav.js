import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import "../Assets/CSS/Nav.css";

const Nav = ({ routes }) => {
  console.log(routes);

  return (
    <Breadcrumb>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>All Actives</Breadcrumb.Item>
      <Breadcrumb.Item active>
        {" "}
        Fun Games to Boos kids Mental Health
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default Nav;
