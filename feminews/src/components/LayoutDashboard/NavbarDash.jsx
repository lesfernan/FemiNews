import React from "react";
import "../../sass/NavbarDash.scss";
import { Link } from "react-router-dom";

const NavbarDash = () => {
  return (
    <div className="container-fluid navbar p-0">
      <div className="container-fluid navbar p-0 d-flex justify-content-between align-items-center">
        <div className="w-25 d-flex align-items-center">
          <img src="/img/img1.svg" alt="" />
          <Link to="/">
            <img src="/img/LGFNews.png" alt="" style={{ height: "50px", objectFit: "contain", width: "250px"}} />
          </Link>
        </div>
        <div className=" d-flex align-items-center">
          <h1 className="px-2 ">Blog </h1>
          <h2 className="px-2 text-dark">{">"} </h2>
          <h1 className="px-2 ">Podcast </h1>
          <h2 className="px-2 text-dark">{">"} </h2>
          <h1 className="px-2 ">Login </h1>
          <img src="/img/img1-2.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default NavbarDash;
