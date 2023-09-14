import React from "react";

export default function Information() {
  return (
    <>
      <div className="container-fluid p-5 ">
        <div className="d-flex justify-content-evenly align-items-center p-4">
          <div className="same">
            <h3 className="text-center text-white">LOCATION</h3>
            <p className="text-center text-white">2215 John Daniel Drive</p>
            <p className="text-center text-white">Clark, MO 65243</p>
          </div>
          <div className="same">
            <h3 className="text-center text-white">AROUND THE WEB</h3>
            <div class="socialList text-center my-4">
              <i class="b fa-brands fa-facebook-f mx-1 icon"></i>
              <i class="a fa-brands fa-twitter mx-1 icon"></i>
              <i class="fa-brands fa-linkedin mx-1 icon"></i>
              <i class="fa-solid fa-globe mx-1 icon"></i>
            </div>
          </div>
          <div className="same">
            <h3 className="text-center text-white">ABOUT FREELANCER</h3>
            <p className="text-center text-white pe-4">
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
