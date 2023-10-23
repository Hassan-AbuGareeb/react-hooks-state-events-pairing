import React, { useState } from "react";
import VoteButton from "./VoteButton";
const Votes = ({ upVotes, downVotes }) => {
  const [likes, setLikes] = useState(upVotes);
  const [dislikes, setDislikes] = useState(downVotes);

  return (
    <div>
      <VoteButton votes={likes} onVote={setLikes} emoji="👍" />
      <VoteButton votes={dislikes} onVote={setDislikes} emoji="👎" />
    </div>
  );
};

export default Votes;
