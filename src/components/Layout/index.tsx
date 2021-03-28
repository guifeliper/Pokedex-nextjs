import React from "react";
import { NavBar } from "components";
// import { Container } from './styles';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="content">
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;
