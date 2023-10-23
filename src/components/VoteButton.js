import React from "react";

const VoteButton = ({ votes, onVote, emoji }) => {
  function handleVote() {
    onVote(votes + 1);
  }

  return (
    <button onClick={handleVote}>
      {votes} {emoji}
    </button>
  );
};

export default VoteButton;
