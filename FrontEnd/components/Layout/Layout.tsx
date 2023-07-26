import React from "react";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
import { LayoutProps } from "./ILayout";


const Layout = ({children}: LayoutProps): JSX.Element => {
  return (
    <>
      <NavBar/>
      {children}
      <Footer />
    </>
  );
};

export default Layout;