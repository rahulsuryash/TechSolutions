import React from "react";
import "../styles/Footer.scss"

const Footer = () => {
  return (

    <div id="footend">
    <footer>
      <div>
        <h1>TechyStar</h1>
        <p>@all right reserved</p>
      </div>

      <div>
        <h5>Follow Us</h5>
        <div>
          <a href="https://youtube.com" target={"blank"}>
            Youtube
          </a>
          <a href="https://instagram.com" target={"blank"}>
            Instagram
          </a>
          
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;