import React from "react";
import logo from "../images/logo.png";
export default function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <img src={logo} alt="logo" />
        <h2>MemeGenerator</h2>
        <h4>Generate Memes In One Click</h4>
      </nav>
    </header>
  );
}
