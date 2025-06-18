import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

function Projects() {
  return (
    <div>
      <NavBar />
      <div className=" text-black h-screen flex items-center justify-center">
        <center>
          <h1>
            <a href="https://github.com/manojitbalasubramanian?tab=repositories">
              VIEW PROJECTS
            </a>
          </h1>
        </center>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
