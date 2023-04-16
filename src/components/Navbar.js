import React from "react";
import logo from "../images/logo.svg";
import { pagelinks } from "../data";
import { sociallinks } from "../data";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/*<!-- left this comment on purpose -->*/}
        <ul className="nav-links" id="nav-links">
          {pagelinks.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.href} className="nav-link">
                  {link.text}
                </a>
              </li>
            );
          })}
        </ul>
        <ul className="nav-icons">
          {sociallinks.map((key) => {
            return (
              <li id={key.id}>
                <a href={key.href} target="_blanks" className="nav-icon">
                  <i className={key.icon}></i>
                </a>
              </li>
            );
          })}
         
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
