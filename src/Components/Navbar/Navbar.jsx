import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [paddingTop, setPaddingTop] = useState(20);
  useEffect(() => {
      const handleScroll = () => {
          const scrollPosition = window.scrollY;

          // Calculate the new padding value based on the scroll position
          const newPaddingTop = 28 - scrollPosition * 1;

          // Set a minimum padding value
          const minimumPaddingTop = 10;
          const updatedPaddingTop = Math.max(newPaddingTop, minimumPaddingTop);

          setPaddingTop(updatedPaddingTop);
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  const navbarStyle = {
      padding: `${paddingTop}px`,
  };

  return <>
<nav style={navbarStyle} className="navbar nova navbar-expand-lg  fixed-top">
  <div className="container">
    <Link className="navbar-brand fw-bolder fs-2 text-white"  to="/">START FRAMEWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link rounded-3 fw-bold mx-2 text-white" aria-current="page" to="/about">ABOUT</NavLink>
        </li>
        <li className="NavLink-item">
          <NavLink className="nav-link  rounded-3 fw-bold mx-2 text-white" aria-current="page" to="/portfolio">PORTFOLIO</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link  rounded-3 fw-bold mx-2 text-white" aria-current="page" to="/contact">CONTACT</NavLink>
        </li>
      </ul>

    </div>
  </div>
</nav>

  </>;
}
