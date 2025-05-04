import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div>
          <h3>©Jishan</h3>
          <ul>
            <li>
              <a target="blank" href="https://www.linkedin.com/in/jishan95/">
                LinkedIn
              </a>
            </li>
            <li>
              <a target="blank" href="https://www.instagram.com/zi___079/">
                {" "}
                Insta
              </a>
            </li>
            <li>
              <a target="blank" href="https://www.facebook.com/kazi.jishan.99">
                facebook
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Check my other websites</h3>
          <ul>
            <li>
              <a
                target="blank"
                href="https://currency-exchange-by-jishan.netlify.app"
              >
                Currency exchange
              </a>
            </li>
            <li>
              <a target="blank" href="https://zi-tic-tac-toe.netlify.app">
                Tic tac toe
              </a>
            </li>
            <li>
              <a
                target="blank"
                href="https://stone-paper-scissors-c-jishan.netlify.app/"
              >
                Rock paper scissors
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-logo">
        <a href="">Demo</a>
        <p>It is a demo wbsite, all functions may not work properly</p>
      </div>
    </>
  );
}

export default Footer;
