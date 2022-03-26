import React from "react";
import { Outlet } from "react-router-dom";
import FooterLanding from "./FooterLanding";
import NavbarLanding from "./NavbarLanding";

const LayoutLanding = () => {
  return (
    <div>
      <NavbarLanding />
      <Outlet />
      <FooterLanding />
    </div>
  );
};

export default LayoutLanding;
