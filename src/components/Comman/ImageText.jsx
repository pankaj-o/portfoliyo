import React from "react";
import Link from "next/link";
import AnimatedDiv from "./AnimatedDiv";

const ImageText = ({ text }) => {
  return (
    <div className="showcase relative w-full h-screen">
      <video
        src="/Earth.mp4"
        className="absolute w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
      ></video>
      <div className="absolute w-full h-full mix-blend-multiply text-white bg-black text-8xl flex items-center justify-center z-1">
        {text}
      </div>
      <Link
        href="/login"
        className="absolute  text-2xl  z-1 "
        style={{
          top: "60%",
          left: "44%",
        }}
      >
        <AnimatedDiv />
      </Link>
    </div>
  );
};

export default ImageText;
