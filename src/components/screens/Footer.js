import React from "react";
import git from "../../assets/images/git.png";
import linkedin from "../../assets/images/linkedin.png";
import github from "../../assets/images/github.png";
import react from "../../assets/images/atom.png";
import css from "../../assets/images/css-3.png";
import figma from "../../assets/images/figma.png";

function Footer() {
  return (
    <div className="h-[200px] w-full flex flex-col gap-3">
      <div className="w-fit float-left">
        <span>Made with</span>
        <span>❤️</span>
        <span>By Alfrin</span>
        <div className="flex gap-2">
        <a>
          <img src={linkedin} className="w-[30px] grayscale" />
        </a>
        <a>
          <img src={github}  className="w-[30px] grayscale"/>
        </a>
        </div> 
      </div>
      <div className="w-fit float-left">
        <span className="text-left w-full block">Made using</span>
        <ul className="flex gap-2">
          <li>
            <img src={react} className="w-[30px] grayscale"/>
          </li>
          <li>
            <img src={css} className="w-[30px] grayscale" />
          </li>
          <li>
            <img src={git} className="w-[30px] grayscale"/>
          </li>
          <li>
            <img src={figma} className="w-[30px] grayscale" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
