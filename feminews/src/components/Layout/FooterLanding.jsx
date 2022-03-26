import React from "react";

const FooterLanding = () => {
  return (
    <div className="text-light d-flex justify-content-center align-items-center pt-5 pb-2" style={{ background: "#6a02f1" }}>
      <div className="d-block text-center">
        <img src="./assets/img/logo.svg" alt="logo" className="img-fluid" style={{ width: "200px" }} />
        <p style={{ color: "#ef5061" }}>Subscribe to get our Newsletter</p>
        <form className="d-flex justify-content-evenly">
          <input type="text" style={{ background: "#6a02f1", borderRadius: "20px", border: "1px solid #ef5061" }} placeholder="Your Email" className="text-light py-1 px-4 me-3" />
          <button style={{ background: "#ef5061", borderRadius: "20px", border: "none" }} className="text-light py-1 px-4">Subscribe</button>
        </form>
        <div className="mt-5 mb-2">
          <a className="text-decoration-none text-light mx-2" href="">Careers</a>
          <a className="text-decoration-none text-light mx-2 px-2" style={{borderRight: "1.5px solid #ef5061", borderLeft: "1.5px solid #ef5061"}} href="">Privacy Policy</a>
          <a className="text-decoration-none text-light mx-2" href="">Terms & Conditions</a>
        </div>
        <p className="text-light">2021 Tourism Department.</p>
      </div>
    </div>
  );
};

export default FooterLanding;
