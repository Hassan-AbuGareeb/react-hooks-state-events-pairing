import React from "react";

const VideoInfo = ({ views, creationDate }) => {
  return (
    <p className="Video-title">
      {views} Views | Uploaded {creationDate}
    </p>
  );
};

export default VideoInfo;
