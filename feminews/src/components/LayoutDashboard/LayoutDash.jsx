import React from "react";
import { Outlet } from "react-router-dom";
import FooterDash from "./FooterDash";
import NavbarDash from "./NavbarDash";

const LayoutDash = () => {
  return (
    <div>
      <NavbarDash />
      <Outlet />
      <FooterDash />
    </div>
  );
};

export default LayoutDash;
