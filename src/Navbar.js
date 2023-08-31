import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="navbar navbar-expand-md navbar-light ">
      <div className="container">
        <h1 className="text-light">TAMILNADU TOURISM</h1>
        <button
          className="navbar-toggler text-light"
          type="button"
          onClick={handleNav}
        >
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </button>
        <div className={`collapse navbar-collapse ${nav ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto fw-bolder">
            <li className="nav-item">
              <Link className="nav-link text-light" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to={"/Place"}>
                Place To Visit
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to={"/Time"}>
                Best Time To Visit
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" >
                Packages
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light">Destination</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to={"/Food"}>Food</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
