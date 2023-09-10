import React from "react";

function Banner() {
  return (
    <div
      style={{
        backgroundImage: 'url("https://wallpaperaccess.com/full/2703652.png")',
      }}
      className="bg-cover h-[448px] text-white"
    >
      <div className="flex flex-col pt-[140px] h-[190px] pl-4 gap-2">
        <h1 className="text-5xl font-extrabold pb-1.5">Movie Name</h1>
        <div className="flex gap-4">
          <button className="text-white border-none outline-none font-bold rounded-md py-2 px-8 bg-gray-800 bg-opacity-50 hover:text-black  hover:bg-[#e6e6e6]">
            Play
          </button>
          <button className="text-white border-none outline-none font-bold rounded-md py-2 px-8 bg-gray-800 bg-opacity-50 hover:text-black  hover:bg-[#e6e6e6]">
            Like
          </button>
        </div>
        <h3 className=" w-[45rem] leading-snug text-[1rem] h-20 max-w-[360px]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae
          placeat excepturi quas dolores ratione doloremque pariatur natus, hic
          commodi rem esse blanditiis unde nesciunt expedita fugiat omnis enim
          cupiditate delectus?
        </h3>
        <div style={{ height: '7.4rem',width: '100%', backgroundImage: 'linear-gradient(180deg, transparent, rgba(37, 37, 37, 0.61), #111)' }}></div>
      </div>
    </div>
  );
}

export default Banner;
