"use client"
import React from "react";
import ImageText from "../components/Comman/ImageText"; // Make sure the filename matches

function Home() {
  return (
    <div className="team" >
      <ImageText text={"Welcome to NEXT"} link={"/home"}/>
    </div>
  );
}

export default Home;
