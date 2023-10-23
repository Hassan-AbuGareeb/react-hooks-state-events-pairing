import React, { useState } from "react";
import VoteButton from "./VoteButton";
const Comment = ({ user, comment, onCommentDelete }) => {
  //votes control
  const [commentLike, setCommentLike] = useState(0);
  const [commentDislike, setCommentDislike] = useState(0);

  function handleCommentDelete(event) {
    onCommentDelete(event);
  }

  return (
    <div>
      <h2>{user}</h2>
      <p>{comment}</p>
      <VoteButton votes={commentLike} onVote={setCommentLike} emoji="👍" />
      <VoteButton
        votes={commentDislike}
        onVote={setCommentDislike}
        emoji="👎"
      />
      <button
        className="deleteButton"
        name={user}
        onClick={handleCommentDelete}
      >
        Remove Comment
      </button>
    </div>
  );
};

export default Comment;
