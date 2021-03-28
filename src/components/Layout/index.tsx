import React from "react";
import { NavBar } from "components";
// import { Container } from './styles';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="content">
      <NavBar />
      <div className="container mx-auto min-h-screen flex flex-col justify-center items-center">
        {children}
      </div>
    </div>
  );
};

export default Layout;
