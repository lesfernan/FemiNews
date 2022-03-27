import React from "react";

const FooterLanding = () => {
  return (
    <div
      className="text-light d-flex justify-content-center align-items-center pt-5 pb-2"
      style={{ background: "#6a02f1" }}
    >
      <div className="d-block text-center">
        <img
          src="./assets/img/logo.png"
          alt="logo"
          className="img-fluid"
          style={{ width: "200px" }}
        />
        <p style={{ color: "#ef5061" }}>Registrate a nuestra página</p>
        <form className="d-flex justify-content-evenly">
          <button
            style={{
              background: "#ef5061",
              borderRadius: "20px",
              border: "none",
            }}
            className="text-light py-1 px-4"
          >
            Registrate
          </button>
        </form>
        <div className="mt-5 mb-2">
          <a className="text-decoration-none text-light mx-2" href="">
            Instagram
          </a>
          <a
            className="text-decoration-none text-light mx-2 px-2"
            style={{
              borderRight: "1.5px solid #ef5061",
              borderLeft: "1.5px solid #ef5061",
            }}
            href=""
          >
            Twitter
          </a>
          <a className="text-decoration-none text-light mx-2" href="">
            Spotify
          </a>
        </div>
        <p className="text-light">2021 FemiNews.</p>
      </div>
    </div>
  );
};

export default FooterLanding;
