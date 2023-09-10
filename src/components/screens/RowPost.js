import React, { useEffect, useState } from "react";
import axios from "../Axios";
import { API_KEY, IMAGE_URL } from "../constants/Constant";
import YouTube from "react-youtube";
function RowPost(props) {
  const [poster, setPoster] = useState([]);
  const [Yturl, setYturl] = useState("");
  useEffect((props) => {
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

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const Handel = (id) => {
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}`)
    .then(function (response) {
        // handle success
        console.log(response.data.results[0].key);
        if (response.data.results !== 0 ){
          setYturl(response.data.results[0].key);
        }
        else{
          console.log("Empty arrray")
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
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
            onClick={(id) => {
              Handel(item.id);
            }}
          />
        ))}
      </div>
      {Yturl && <YouTube opts={opts} videoId={`${Yturl}`} />}
    </div>
  );
}

export default RowPost;
