"use client"
import React from "react";
import backgroundImage1 from "./backgroudimage1.jpg"; // Make sure the filename matches
import ImageText from "../components/Comman/ImageText"; // Make sure the filename matches
import AnimatedDiv from "@/components/Comman/AnimatedDiv";

function Home() {
  return (
    <div className="team" >
      <ImageText text={"Welcome to NEXT"}/>
      {/* <AnimatedDiv text="Click Here ok Budddy"/> */}
    </div>
  );
}

export default Home;
