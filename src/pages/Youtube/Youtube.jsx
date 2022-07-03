import "./Youtube.css";
import { useEffect, useState } from "react";
import YoutubeFrame from "./YoutubeFrame";
import { Skeleton } from "@mui/material";


const axios = require("axios");

const Youtube = () => {
  //use axios to fetch from https://www.googleapis.com/youtube/v3/search

  const [videos, setVideos] = useState([]);
  const [loaded, setLoaded] = useState(false);


  const youtubeApi = "https://www.googleapis.com/youtube/v3/search";
  const apiKey = "AIzaSyA4YE1dzIlAKsiHVOVzmpREh7f8AQbOsLI";
  const query = `two sum python`;

  // cache response 



  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(youtubeApi, {
        params: {
          q: query,
          part: "snippet",
          maxResults: 9,
          key: apiKey,
        },
      });
      setVideos(response.data.items);
    };
    fetchData();
    setLoaded(true);
  }, []);

  return (
    <div className="page">
      <div className="sectionTitle">Two Sum</div>
      <div className="card">
        <div className="youtubeGrid">
          {!loaded && [...Array(9)].map((e, i) => (<Skeleton animation="wave" variant="rectangular" height={300} />))}
          {loaded && videos.map((video, id) => (
            <YoutubeFrame id={id} videoId={video.id.videoId} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Youtube;
