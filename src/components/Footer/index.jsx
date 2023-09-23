import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="contact">
        <div className="contactDetails">
          <i className="fa fa-phone-square number"></i>
          <h5>7272929272</h5>
        </div>
        <div className="contactDetails">
          <i className="fa fa-envelope-square mail"></i>
          <h5 className="email">therishabranjan@gmail.com</h5>
        </div>
      </div>
      <div className="copyright">
        <h2>RISHAß.</h2>
        <h4>© 2019 PORTFOLIO - ALL RIGHTS RESERVED</h4>
      </div>
      <div className="s-m">
        <a
          href="https://github.com/rishabranjan"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.facebook.com/therishabranjan/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          href="https://twitter.com/RishabRanjan17"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://www.instagram.com/rishab_ranjan/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
