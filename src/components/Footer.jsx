import React from "react";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section about">
            <h3>About Us</h3>
            <p>
              We are a team dedicated to providing the best quality products and
              services to our customers.
            </p>
          </div>
          <div className="footer-section links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/menu">Menu</a>
              </li>
              <li>
                <a href="/order">Order</a>
              </li>
            </ul>
          </div>
          <div className="footer-section contact">
            <h3>Contact Us</h3>
            <p>Email: info@bundrop.com</p>
            <p>Phone: +123 456 7890</p>
            <div className="socials">
              <a href="#">
                <img
                  id="facebook"
                  src="https://1000logos.net/wp-content/uploads/2017/02/Facebook-Logosu.png"
                  alt="Facebook"
                ></img>
              </a>
              <a href="#">
                <img
                  src="https://img.freepik.com/free-vector/instagram-vector-social-media-icon-7-june-2021-bangkok-thailand_53876-136728.jpg?size=338&ext=jpg&ga=GA1.1.2082370165.1717027200&semt=ais_user"
                  alt="Instagram"
                ></img>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            2024 BunDrop. No rights reserved. AI generated material made with
            Adobe Firefly
          </p>
          <br />
        </div>
      </div>
    </div>
  );
}

export default Footer;
