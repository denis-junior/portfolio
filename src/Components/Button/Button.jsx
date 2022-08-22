import React from "react";
import "./Button.css";

const Button = ({ link, children }) => {
  return <a className="discover-me" href={link}>{children}</a>;
};

export default Button;
