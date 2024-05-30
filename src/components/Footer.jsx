import React from "react";

function Footer() {
  return (
    <div className="footer-container">
      <div class="footer-container">
        <div class="footer-content">
          <div class="footer-section about">
            <h3>About Us</h3>
            <p>
              We are a team dedicated to providing the best quality products and
              services to our customers.
            </p>
          </div>
          <div class="footer-section links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div class="footer-section contact">
            <h3>Contact Us</h3>
            <p>Email: info@bundrop.com</p>
            <p>Phone: +123 456 7890</p>
            <div class="socials">
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
        <div class="footer-bottom">2024 BunDrop. All rights reserved.</div>
      </div>
    </div>
  );
}

export default Footer;
