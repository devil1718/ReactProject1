import React from "react";

export default function About() {
  return (
    <>
      <div className="container-fluid  home">
        <div className="text-center container w-75">
          <h2 className="text-center text-white fw-bold fs-1 my-3">
            ABOUT COMPONENT
          </h2>
          <div className="d-flex justify-content-center">
            <div className="after"></div>
            <i className="fa-solid fa-star px-3 pb-2"></i>
            <div className="after"></div>
          </div>
          <div className="d-flex">
            <div className="text-white text-start">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </div>
            <div className="text-white text-start">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
