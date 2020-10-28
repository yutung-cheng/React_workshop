import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

const KEY = "AIzaSyCpNrBh9dxb22ALh7O-_JGCoMpAaGTYT6c";

const useVideos = defaultSearchTerm => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]); //Run only one time

  const search = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        type: "video",
        key: KEY
      }
    });

    setVideos(response.data.items);
  };

  //Return can be arrays or objects
  return [videos, search];
};

export default useVideos;
