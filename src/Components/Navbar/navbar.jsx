import "./navbar.css";
import React, { useState } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import { Link, NavLink } from "react-router-dom";
import { useFood } from "../../Context/FoodContext";

const Navbar = ({loginModel, setLoginModel}) => {
  const [isActive, setIsActive] = useState("home");
  const {totalCount} = useFood()
 
  return (
    <nav>
      <Link to={"/#"}>
        <img className="logo" src={assets.logo} alt="" />
      </Link>
      <ul className="navbar-menu">
        <li>
          <a
            href={"/#"}
            onClick={() => setIsActive("home")}
            className={isActive === "home" ? "active" : ""}
          >
            home
          </a>
        </li>
        <li>
          <a
            href={"/#menu"}
            onClick={() => setIsActive("menu")}
            className={isActive === "menu" ? "active" : ""}
          >
            menu
          </a>
        </li>
        <li>
          <a
            href={"/#mobile-app"}
            onClick={() => setIsActive("mobile-app")}
            className={isActive === "mobile-app" ? "active" : ""}
          >
            mobile-app
          </a>
        </li>
        <li>
          <a
            href={"#footer"}
            onClick={() => setIsActive("contact-us")}
            className={isActive === "contact-us" ? "active" : ""}
          >
            contact us
          </a>
        </li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="basket-icon">
          <Link to={"/basket"}>
            <Link to={"/cart"}><img src={assets.basket_icon} alt="" /></Link>
          </Link>
          <div className={totalCount() > 0 ? "dot" : ""}></div>
        </div>
        <Link to={""} onClick={() => setLoginModel(true)} className="btn">
          Sign in
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
