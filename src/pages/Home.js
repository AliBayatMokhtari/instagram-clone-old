import React from "react";
import Post from "../components/Post/Post";
import HomeHeader from "../components/Home/HomeHeader";

const Home = () => {
  return (
    <div>
      <HomeHeader />
      <Post
        userName="Ali BM"
        avatarUrl="https://picsum.photos/110/110"
      />
    </div>
  );
};

export default Home;
