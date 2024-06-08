import React from "react";
import Display from "../components/Display";

function Home({ user }) {
  return (
    <div className="home-cont">
      <Display user={user}></Display>
    </div>
  );
}

export default Home;
