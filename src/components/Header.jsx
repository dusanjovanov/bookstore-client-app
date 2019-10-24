import React from "react";
import Nav from "./Nav";
import { Logo } from "./shared";
import { Link } from "@reach/router";

const Header = () => {
  return (
    <header
      css={`
        border-bottom: 1px solid #ccc;
      `}
    >
      <Link to="/">
        <Logo className="mb1" />
      </Link>
      <Nav />
    </header>
  );
};

export default Header;
