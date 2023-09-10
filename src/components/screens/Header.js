import React from "react";
import netflix_logo from "../../assets/images/Netflix_Logo_RGB.png";
import profile from "../../assets/images/Netflix-avatar.png";
import search from "../../assets/images/search.svg";
import bell from "../../assets/images/bell.svg";

function Header() {
  return (
    <>
      <nav className="w-full flex items-center justify-between p-5 absolute z-[100] h-[60px] bg-black text-white">
        <ul>
          <li>
            <img src={netflix_logo} className="w-28 top-0" alt="logo" />
          </li>
          <li></li>
        </ul>
        <ul className="flex items-center gap-5 justify-center text-lg">
          <li>Home</li>
          <li>Movies</li>
          <li>TV Shows</li>
        </ul>
        <div className="flex items-center gap-5">
          <div>
            <img src={search} className="w-5" />
          </div>
          <div>
            <img src={bell} className="w-5" />
          </div>
          <div>
            <img
              src={profile}
              className="w-8 rounded-sm "
              alt="profile picture"
            />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
