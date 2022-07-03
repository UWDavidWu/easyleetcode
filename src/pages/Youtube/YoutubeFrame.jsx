import "./YoutubeFrame.css";
import { useState } from "react";
import { Skeleton } from "@mui/material";

const YoutubeFrame = ({ videoId }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="youtubeFrame">
      {!loaded && (
        <Skeleton animation="wave" variant="rectangular" height={180} />
      )}

      <iframe
        style={{ display: loaded ? "block" : "none" }}
        height="180"
        src={`https://www.youtube.com/embed/${videoId}`}
        onLoad={() => setLoaded(true)}
        frameBorder="0"
        title="youtube"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YoutubeFrame;
