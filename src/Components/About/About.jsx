import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="main about">
      <h1 id="about">
        About me <hr />
      </h1>
      <p className="description">
        Hello! My name is Denis and I like to create things that live on the
        internet. My interest in web development started back in 2018 when I
        decided to join in this world — firstly I started to learn about html
        and css for quickly create beatiful static pages and feel that I was
        making something cool!
      </p>

      <p className="description">
        As for professional experience, I have already worked in a technology <a href="https://www.segup.pa.gov.br" target="_blank" rel="noreferrer">department of the government of my city</a>, where I was able to learn more
        about the technologies I use today, such as react and express.
      </p>

      <p className="description">
        Here are a few technologies I’ve been working with recently:
      </p>
    </div>
  );
};

export default About;
