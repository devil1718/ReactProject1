import React, { useState } from "react";

export default function Contact() {
  let [inputValue, setInputValue] = useState('');
  const handleKeyDown = () => {
    const label = document.getElementById('userLabel');
    if (inputValue) {
      label.classList.add('top');
    } else {
      label.classList.remove('top');
    }
  };
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
};

//#################################
let [Age, setInputAge] = useState('');
let handleKeyDownAge = () => {
  const label = document.getElementById('AgeLabel');
  if (Age) {
    label.classList.add('top');
  } else {
    label.classList.remove('top');
  }
};
const handleAgeChange = (event) => {
  setInputAge(event.target.value);
};
// ##########################################
const [Email, setInputEmail] = useState('');
let handleKeyDownEmail = () => {
  const label = document.getElementById('EmailLabel');
  if (Email) {
    label.classList.add('top');
  } else {
    label.classList.remove('top');
  }
};
const handleEmailChange = (event) => {
  setInputEmail(event.target.value);
};
// ################################################
const [password, setInputpassword] = useState('');
let handleKeyDownpassword = () => {
  const label = document.getElementById('PasswordLabel');
  if (password) {
    label.classList.add('top');
  } else {
    label.classList.remove('top');
  }
};
const handlePasswordChange = (event) => {
  setInputpassword(event.target.value);
};

  return (
    <>
      <div className=" container w-50 contact ">
        <h2 className="hambozo text-center  fw-bolder fs-1 my-3 pt-4 ">
          CONATCT SECTION
        </h2>
        <div className="d-flex justify-content-center">
          <div className="hamboza after "></div>
          <i className="hambozo fa-solid fa-star px-3 pb-2  "></i>
          <div className="after hamboza "></div>
        </div>
        <form action="">
          <div className="a7a">
            <label
              className={inputValue ? "top" : ''}
              id="userLabel"
              htmlFor="UserName"
            >
              UserName :
            </label>
            <input
              type="text"
              id="UserName"
              placeholder="UserName"
              className="form-control my-5 border-0 border-bottom"
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
          </div>

           <div className="a7a">
                <label className={Age ? 'top' : ''} id='AgeLabel' htmlFor="UserAge">UserAge :</label>
                <input type="number" id='UserAge' placeholder='UserAge' className='form-control  my-5 border-0 border-bottom' value={Age}
                  onChange={handleAgeChange}
                  onKeyDown={handleKeyDownAge} />
              </div>



              <div className="a7a">
                <label className={Email ? 'top' : ''} id='EmailLabel' htmlFor="UserEmail">UserEmail :</label>
                <input type="email" id='UserEmail' placeholder='UserEmail' className='form-control  my-5 border-0 border-bottom' value={Email}
                  onChange={handleEmailChange}
                  onKeyDown={handleKeyDownEmail} />
              </div>


              <div className="a7a">
                <label className={password   ? 'top' : ''} id='PasswordLabel' htmlFor="UserPassword">UserPassword :</label>
                <input type="password" id='UserPassword' placeholder='UserPassword' className='form-control  my-5 border-0 border-bottom' value={password  }
                  onChange={handlePasswordChange}
                  onKeyDown={handleKeyDownpassword} />
              </div> 

          <button className="btn btn-info">Send Message</button>
        </form>
      </div>
    </>
  );
}
