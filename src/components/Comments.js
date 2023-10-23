import React, { useState } from "react";
import CommentsControl from "./CommentsControl";
import CommentsList from "./CommentsList";
const Comments = ({ commentsArray }) => {
  const [showComments, setShowComments] = useState(true);
  return (
    <div>
      <CommentsControl
        showComments={showComments}
        onShowCommentsClick={setShowComments}
      />
      <hr />
      <h2>{commentsArray.length} Comments</h2>
      <CommentsList comments={commentsArray} showComments={showComments} />
    </div>
  );
};

export default Comments;
