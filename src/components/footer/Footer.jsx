import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  return (
    <footer className='footer'>
      <ContentWrapper>
        <ul className='menuItems'>
          <li className='menuItem'>Terms Of Use</li>
          <li className='menuItem'>Privacy-Policy</li>
          <li className='menuItem'>About</li>
          <li className='menuItem'>Blog</li>
          <li className='menuItem'>FAQ</li>
        </ul>
        <div className='infoText'>
          Moviewood: Your Ultimate Film Companion 🎬 Explore the cinematic world
          with ease, powered by the IMDB API. Discover movie trivia, ratings,
          and more! © 2023 Moviewood. All rights reserved.
        </div>
        <div className='socialIcons'>
          <span className='icon'>
            <FaFacebookF />
          </span>
          <span className='icon'>
            <FaInstagram />
          </span>
          <span className='icon'>
            <FaTwitter />
          </span>
          <span className='icon'>
            <FaLinkedin />
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
