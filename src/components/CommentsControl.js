import React from "react";

const CommentsControl = ({ showComments, onShowCommentsClick }) => {
  function handleShowClick() {
    onShowCommentsClick(!showComments);
  }
  const commentsStatus = showComments ? "Hide" : "Show";
  return (
    <div className="comments-button">
      <button onClick={handleShowClick}>{commentsStatus} Comments</button>
    </div>
  );
};

export default CommentsControl;
