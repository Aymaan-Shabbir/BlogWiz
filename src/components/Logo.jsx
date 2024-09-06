import React from "react";
import blogWiz from "../assets/blogWiz.jpg"; // Adjust the path based on where you move the image

function Logo({ width = "100px" }) {
  return (
    <div>
      <img src={blogWiz} alt="BlogWiz Logo" style={{ width }} />{" "}
    </div>
  );
}

export default Logo;
