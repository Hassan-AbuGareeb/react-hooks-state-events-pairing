import React, { useState } from "react";
import Comment from "./Comment";
import Filter from "./Filter";
const CommentsList = ({ comments, showComments }) => {
  //search state control
  const [search, setSearch] = useState("");
  //comments sorting
  const [sort, setSort] = useState("New");
  //comments as a state
  const [currentComments, setCurrentComments] = useState([...comments]);
  //filter comments with search
  const SearchResults = currentComments.filter((userComment) => {
    return userComment.user.toLowerCase().includes(search.toLowerCase().trim());
  });
  //comment deletion handling
  //comments sorting
  const sortedResults = SearchResults.sort((a, b) => {
    const aName = a.user.toLowerCase();
    const bName = b.user.toLowerCase();
    if (sort === "New") return 0;
    else if (sort === "Ascend") {
      if (aName > bName) return 1;
      else if (bName > aName) return -1;
      else return 0;
    } else {
      if (aName < bName) return 1;
      else if (bName < aName) return -1;
      else return 0;
    }
  });
  //comments Deletion
  function handleCommentDelete(event) {
    const deleteComments = sortedResults.filter((comment) => {
      return comment.user !== event.target.name;
    });
    setCurrentComments([...deleteComments]);
  }

  //comments items creation.
  const commentItems = SearchResults.map((userComment) => (
    <div key={userComment.id}>
      <Comment
        key={userComment.id}
        user={userComment.user}
        comment={userComment.comment}
        onCommentDelete={handleCommentDelete}
      />
    </div>
  ));
  return (
    <div>
      {" "}
      <Filter
        searchValue={search}
        onSearch={setSearch}
        sortValue={sort}
        onSort={setSort}
      />
      {showComments ? commentItems : null}
    </div>
  );
};

export default CommentsList;
