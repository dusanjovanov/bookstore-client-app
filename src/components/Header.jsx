import React from "react";
import Nav from "./Nav";
import { Logo } from "./shared";

const Header = () => {
  return (
    <header>
      <Logo
        className="mb1"
        css={`
          background-color: gainsboro;
        `}
      />
      <Nav />
    </header>
  );
};

export default Header;
