import React from "react";
import "../../sass/FooterDash.scss";
const FooterDash = () => {
  return (
    <div className="container-fluid footer p-4 d-flex justify-content-between align-items-center position-relative">
      <div className="w-25 text-light ">
        <h4>Podcast || FQ || About Us || Blog</h4>
      </div>
      <div className="w-25 div-form">
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Newslatters"
            aria-label="Search"
          />
          <button className="btn btn-dark" type="submit">
            Submit
          </button>
        </form>
        <span className="text-center text-light w-100  p-2">
          Suscribete al Newslatter
        </span>
      </div>
      <div className="w-25 d-flex justify-content-end">
        <button className="btn-icon mx-2">
          <i className="bi bi-facebook" />
        </button>
        <button className="btn-icon mx-2">
          <i className="bi bi-twitter" />
        </button>
        <button className="btn-icon mx-2">
          <i className="bi bi-instagram" />
        </button>
      </div>
      <span className="copyrigth">©Copyright Feminews 2022 </span>
    </div>
  );
};

export default FooterDash;
