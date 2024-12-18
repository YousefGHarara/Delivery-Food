import { assets } from "../../assets/frontend_assets/assets";
import "./footer.css";
import React, { useEffect, useState } from "react";

const Footer = () => {

  const [hour, setHour] = useState(new Date().getHours());
  const [mintue, setMintue] = useState(new Date().getMinutes());
  const [second, setSecond] = useState(new Date().getSeconds());


  useEffect(() => {
    const interval = setInterval(() => {
      setHour(new Date().getHours());
      setMintue(new Date().getMinutes());
      setSecond(new Date().getSeconds());
    }, 1000)
    return () => clearInterval(interval)
  }, [])


  return (
    <footer id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quis
            enim, laboriosam eum est qui dolore accusamus dolor sed nesciunt
            unde dolorum fugiat alias eaque nemo itaque repellendus quasi
            temporibus.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>278-638-6659</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        CopyRight {new Date().getFullYear()} at {hour} : {mintue} : {second} &copy; Tomato.com &bull; All Right Reserved &bull;
      </p>
    </footer>
  );
};

export default Footer;
