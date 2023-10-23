import video from "../data/video.js";
import Video from "./Video.js";
import VideoInfo from "./VideoInfo.js";
import Votes from "./Votes.js";
import Comments from "./Comments.js";
function App() {
  const { title, embedUrl, views, createdAt, upvotes, downvotes, comments } =
    video;
  return (
    <div className="App">
      <Video url={embedUrl} />
      <h1>{title}</h1>
      <VideoInfo views={views} creationDate={createdAt} />
      <Votes upVotes={upvotes} downVotes={downvotes} />
      <Comments commentsArray={comments} />
    </div>
  );
}

export default App;
