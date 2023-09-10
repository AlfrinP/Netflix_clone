import React, { useEffect, useState } from "react";
import axios from "../Axios";
import { IMAGE_URL } from "../constants/Constant";
function RowPost(props) {
  const [poster, setPoster] = useState([]);
  useEffect(() => {
    axios
      .get(props.url)
      .then(function (response) {
        console.log(response.data.results);
        setPoster(response.data.results);
      })
      .catch((err) => {
        alert("Network Error");
      });
  }, []);
  return (
    <div className="ml-[20px] text-white">
      <h2>{props.title}</h2>
      <div className="flex p-5 overflow-y-hidden overflow-x-scroll no-scrollbar">
        {poster.map((item) => (
          <img
            key={item.id}
            className={props.className}
            src={`${IMAGE_URL + item.backdrop_path}`}
            alt="poster"
          />
        ))}
      </div>
    </div>
  );
}

export default RowPost;
