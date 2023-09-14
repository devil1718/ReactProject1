import React from "react";

import myImage from"../images/avataaars.svg"

export default function Home() {
  return (
    <>
      <div className="container-fluid  home">
        <div className="text-center">
          <img src={myImage} alt="" className="homeImage w-75" />
          <h2 className="text-center text-white fw-bold fs-1 my-4">START FRAMEWORK</h2>
          <div className="d-flex justify-content-center mb-3">
            <div className="after"></div>
            <i className="fa-solid fa-star px-3 "></i>
            <div className="after"></div>
          </div>
          <p className="fw-bold text-white">Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
    </>
  );
}
