import React from "react";
import $ from "jquery";

import image1 from "../images/poert1.png";
import image2 from "../images/port2.png";
import image3 from "../images/port3.png";

export default function Portfolio() {
  return (
    <>
      <div className=" container Portfolio ">
        <h2 className="hambozo text-center  fw-bolder fs-1 my-3 pt-4 ">
          PORTFOLIO COMPONENT
        </h2>
        <div className="d-flex justify-content-center">
          <div className="hamboza after "></div>
          <i className="hambozo fa-solid fa-star px-3 pb-2  "></i>
          <div className="after hamboza "></div>
        </div>
        <div className="row g-5 ">
          <div class="col-md-4">
            {/* Button trigger modal */}
            <div data-bs-toggle="modal" data-bs-target="#exampleModal">
              <div class="item position-relative overflow-hidden">
                <img src={image1} class="w-100 rounded-3" />
                <div class="item-layer position-absolute d-flex align-items-center justify-content-center text-black p-2">
                  <i className="text-white fa-solid fa-plus fa-6x "></i>
                </div>
              </div>
            </div>
            {/* Modal */}
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-body">
                    <img src={image1} class="w-100 rounded-3" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            {/* Button trigger modal */}
            <div data-bs-toggle="modal" data-bs-target="#exampleModal2">
              <div class="item position-relative overflow-hidden">
                <img src={image2} class="w-100 rounded-3" />
                <div class="item-layer position-absolute d-flex align-items-center justify-content-center text-black p-2">
                  <i className="text-white fa-solid fa-plus fa-6x "></i>
                </div>
              </div>
            </div>
            {/* Modal */}
            <div
              className="modal fade"
              id="exampleModal2"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-body">
                    <img src={image2} class="w-100 rounded-3" />
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div class="col-md-4">
            {/* Button trigger modal */}
            <div data-bs-toggle="modal" data-bs-target="#exampleModal3">
              <div class="item position-relative overflow-hidden">
                <img src={image3} class="w-100 rounded-3" />
                <div class="item-layer position-absolute d-flex align-items-center justify-content-center text-black p-2">
                  <i className="text-white fa-solid fa-plus fa-6x "></i>
                </div>
              </div>
            </div>
            {/* Modal */}
            <div
              className="modal fade"
              id="exampleModal3"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-body">
                    <img src={image3} class="w-100 rounded-3" />
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div class="col-md-4">
            {/* Button trigger modal */}
            <div data-bs-toggle="modal" data-bs-target="#exampleModal4">
              <div class="item position-relative overflow-hidden">
                <img src={image1} class="w-100 rounded-3" />
                <div class="item-layer position-absolute d-flex align-items-center justify-content-center text-black p-2">
                  <i className="text-white fa-solid fa-plus fa-6x "></i>
                </div>
              </div>
            </div>
            {/* Modal */}
            <div
              className="modal fade"
              id="exampleModal4"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-body">
                    <img src={image1} class="w-100 rounded-3" />
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div class="col-md-4">
            {/* Button trigger modal */}
            <div data-bs-toggle="modal" data-bs-target="#exampleModal5">
              <div class="item position-relative overflow-hidden">
                <img src={image2} class="w-100 rounded-3" />
                <div class="item-layer position-absolute d-flex align-items-center justify-content-center text-black p-2">
                  <i className="text-white fa-solid fa-plus fa-6x "></i>
                </div>
              </div>
            </div>
            {/* Modal */}
            <div
              className="modal fade"
              id="exampleModal5"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-body">
                    <img src={image2} class="w-100 rounded-3" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          
          <div class="col-md-4">
            {/* Button trigger modal */}
            <div data-bs-toggle="modal" data-bs-target="#exampleModal6">
              <div class="item position-relative overflow-hidden">
                <img src={image3} class="w-100 rounded-3" />
                <div class="item-layer position-absolute d-flex align-items-center justify-content-center text-black p-2">
                  <i className="text-white fa-solid fa-plus fa-6x "></i>
                </div>
              </div>
            </div>
            {/* Modal */}
            <div
              className="modal fade"
              id="exampleModal6"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-body">
                    <img src={image3} class="w-100 rounded-3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
