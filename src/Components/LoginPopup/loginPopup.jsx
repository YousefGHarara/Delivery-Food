import { useEffect, useRef, useState } from "react";
import "./loginPopup.css";
import React from "react";
import { assets } from "../../assets/frontend_assets/assets";

const LoginPopup = ({ loginModel, setLoginModel }) => {
  const [currentState, setCurrentState] = useState("Login");

  const loginRef = useRef();

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if(e.target === loginRef.current) {
        setLoginModel(false)
      }
    })
  }, [])

  return (
    <div className="login-popup" ref={loginRef} >
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img
            onClick={() => setLoginModel(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currentState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your Name" />
          )}
          <input type="email" placeholder="Your Email" />
          <input type="password" placeholder="Your Password" />
        </div>
        <button >
          {currentState === "Sign Up" ? "create account" : "login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use & privacy policy .</p>
        </div>
        <p className="login-popup-action">
          {currentState === "Login" ? (
            <>
              Create a new account ?{" "}
              <span onClick={() => setCurrentState("Sign Up")}>Click here</span>
            </>
          ) : (
            <>
              Already have an account ?{" "}
              <span onClick={() => setCurrentState("Login")}>Login here</span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default LoginPopup;
