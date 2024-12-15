import "./navbar.css";
import React from "react";
import { assets } from "../../assets/frontend_assets/assets";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to={"/"}><img className="logo" src={assets.logo} alt="" /></Link>
      <ul className="navbar-menu">
        <li>
          <NavLink to={"/home"}>home</NavLink>
        </li>
        <li>
          <NavLink to={"/menu"}>menu</NavLink>
        </li>
        <li>
          <NavLink to={"/mobile-app"}>mobile-app</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>contact us</NavLink>
        </li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="basket-icon">
          <Link to={"/basket"}><img src={assets.basket_icon} alt="" /></Link>
          <div className="dot"></div>
        </div>
        <Link to={'/sign-in'} className="btn">Sign in</Link>
      </div>
    </nav>
  );
};

export default Navbar;
