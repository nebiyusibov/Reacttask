import React from "react";
import "./NavSectionContainer.css";

function NavSectionContainer() {
  return (
    <section className="nav_section_container">
      <div className="div_section_container">
        <nav>
          <h3 className="nav_h3">Financier</h3>
          <ul>  
            <li>Home</li>
            <li>
              Solutions
            </li>
            <li>Services</li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
          <div className="icon_number">
            <div className="icon">
              {" "}
            </div>
            <div className="number">123-489-9381</div>
          </div>
        </nav>

        <div className="section_container">
          <div className="div_text">
            <h1>We Help Grow Your Business</h1>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <div className="section_container_btn">
              <a href="aaa">
                <button className="btn1">Contact Us</button>
              </a>
              <a href="aaa">Watch the video</a>
            </div>
          </div>
          <div className="div_img">
            <img
              src="https://preview.colorlib.com/theme/financier/images/img_6.jpg.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default NavSectionContainer;
