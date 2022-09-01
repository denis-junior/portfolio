import React from "react";
import Button from "../Button/Button";
import "./Info.css";

const Content = () => {
  return (
    <main className="main">
      <div className="info">
        <h3>Hello, my name is</h3>
        <h1>Denis Junior.</h1>
        <h1>I build nice applications for web.</h1>
        <div className="description">
          <p>
            I’m a software engineer looking for a job in junior position. I'm
            currently focused on learning more about web technologies like
            typescript and react.
          </p>
        </div>
        <Button className='discover-me' link={"#about"} >Discover me</Button>
      </div>
    </main>
  );
};

export default Content;
