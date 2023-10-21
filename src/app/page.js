import React from "react";
import backgroundImage1 from "./backgroudimage1.jpg"; // Make sure the filename matches

const styling = {
  backgroundSize: "cover",
  width: "100vw", // Use viewport width for full width
  height: "100vh", // Use viewport height for full height
  color: "red",
  backgroundImage: `url('${backgroundImage1}')`, // Use the imported image
};

function Home() {
  return (
    <div className="team" style={styling}>
      <p>here</p>
    </div>
  );
}

export default Home;
