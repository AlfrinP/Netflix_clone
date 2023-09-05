import React from "react";
import maveli from "../../assets/images/maveli relax.png";
import maveli_girls from "../../assets/images/maveli_girls.png";
function Home() {
  return (
    <>
      <div className="flex items-center justify-center h-screen w-full">
        <div className="1/2">
          <img src={maveli} alt="maveli photo" className="h-[500px] w-full" />
        </div>
        <div className="w-1/2 flex flex-col gap-3">
          <span className="text-[50px] font-bold w-full">Happy Onam</span>
          <span className="text-[18px] font-regular w-full">
            August 30<span className="align-super text-sm">th</span> 2023
          </span>
          <span className="text-[35px] font-bold w-full">I'm Mahabali</span>
          <span className="text-[25px] w-full font-medium">
            <span className="font-light">a.k.a.</span> Maveli
          </span>
          <span className="text-[20px] font-light w-full">
            The mythical beloved king of Kerala from the netherworld
          </span>
        </div>
      </div>
      <div className="h-screen flex-col flex">
        <span className="w-full align-middle font-bold text-5xl">
          My Features
        </span>
        <div className="flex items-center flex-col">
          <div className="w-full h-screen">
            <span>My Tummy</span>
            <p>
              The big round tummy of Onam Maveli in the context of the Onam
              festival, symbolizes his generosity, equality in treatment,
              prosperity, hospitality, and the harmony of his rule. It serves as
              a visual reminder of these core values that are celebrated during
              Onam in Kerala.
            </p>
            <img />
          </div>
          <div className="w-full h-screen">
            <span>My Umbrella</span>
            <p>
              The umbrella of Onam Maveli symbolizes not only protection and
              strength but also carries a deeper cultural significance. It
              serves as a symbol of safety, offering shelter and security to the
              people. Additionally, it represents the resilience and fortitude
              of the Kerala culture, with its vibrant colors and intricate
              designs echoing the enduring spirit of the Onam festival and the
              strength of its people.
            </p>
          </div>
          <div className="w-full h-screen">
            <span>My Traditional Attire</span>
            <p>
              The traditional attire of Onam Maveli represents the unity and
              cherished traditions of Kerala. It unites people in celebration
              and embodies the enduring cultural heritage of the region,
              fostering a sense of pride and belonging.
            </p>
            <img
              src={maveli_girls}
              alt="maveli with dancers"
              className="w-[500px] bottom-0"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
