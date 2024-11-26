import React from "react";
import Post from "./Post";

const Feed = () => {
  return (
    <div className="p-4 rounded-lg bg-white flex flex-col gap-12">
      <Post />
    </div>
  );
};

export default Feed;
