import React from "react";
import "./Links.css";

const Links = () => {
  return (
    <div>
      <a className="email" href="mailto:denis_jr2001@hotmail.com">
        denis_jr2001@hotmail.com
      </a>
      <ul className="accounts">
        <li className="social-icons">
            <a href="">
                <i class="devicon-github-original"></i>
            </a>
        </li>
        <li className="social-icons">
            <a href="">
                <i class="fa-brands fa-instagram"></i>
            </a>
        </li>
        <li className="social-icons">
            <a href="">
                <i class="devicon-linkedin-plain"></i>
            </a>
        </li>
        <span className="line"></span>
      </ul>
    </div>
  );
};

export default Links;
