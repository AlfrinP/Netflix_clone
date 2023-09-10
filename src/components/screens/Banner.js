import React, { useEffect, useState } from "react";
import axios from "../Axios";
import { API_KEY, IMAGE_URL } from "../constants/Constant";

function Banner() {
  const [Movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(`movie/popular?language=en-US&page=1&api_key=${API_KEY}`)
      .then(function (response) {
        console.log(response.data.results[0]);
        setMovies(response.data.results[0]);
      });
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${Movies ? IMAGE_URL + Movies.backdrop_path : ''})`
      }}
      className="bg-cover h-[500px] text-white"
    >
      <div className="flex flex-col pt-[140px] h-[190px] pl-4 gap-2">
        <h1 className="text-5xl font-extrabold pb-1.5">
          {Movies ? Movies.title : ""}
        </h1>
        <div className="flex gap-4">
          <button className="text-white border-none outline-none font-bold rounded-md py-2 px-8 bg-gray-800 bg-opacity-50 hover:text-black  hover:bg-[#e6e6e6]">
            Play
          </button>
          <button className="text-white border-none outline-none font-bold rounded-md py-2 px-8 bg-gray-800 bg-opacity-50 hover:text-black  hover:bg-[#e6e6e6]">
            Like
          </button>
        </div>
        <h3 className=" w-[45rem] leading-snug text-[1rem] h-20 max-w-[360px]">
          {Movies ? Movies.overview : ""}
        </h3>
        <div
          style={{
            height: "7.4rem",
            width: "100%",
            backgroundImage:
              "linear-gradient(180deg, transparent, rgba(37, 37, 37, 0.61), #111)",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Banner;
