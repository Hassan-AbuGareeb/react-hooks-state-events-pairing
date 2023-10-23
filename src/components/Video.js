import React from "react";

const Video = ({ url }) => {
  return (
    <div>
      <iframe
        width="919"
        height="525"
        src={url}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
    </div>
  );
};

export default Video;
