import React from 'react';
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { FaLinkedinIn } from 'react-icons/fa';

function SocialMedia() {
  return (
    <ul className="home-about-social-links">
      <li className="social-icons">
        <a
          href="https://github.com/anwarul1"
          target="_blank"
          rel="noreferrer"
          className="icon-colour  home-social-icons"
        >
          <AiFillGithub className="social-icon" />
        </a>
      </li>
      <li className="social-icons">
        <a
          href="https://www.linkedin.com/in/anwarul-islam-69689023b/"
          target="_blank"
          rel="noreferrer"
          className="icon-colour  home-social-icons"
        >
          <FaLinkedinIn className="social-icon" />
        </a>
      </li>
      <li className="social-icons">
        <a
          href="https://www.instagram.com/anwarul.islam.jewel/"
          target="_blank"
          rel="noreferrer"
          className="icon-colour home-social-icons"
        >
          <AiFillInstagram className="social-icon" />
        </a>
      </li>
      <li className="social-icons">
        <a
          href="mailto:anwarulislam1040@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="icon-colour home-social-icons"
        >
          <MdEmail className="social-icon" />
        </a>
      </li>
    </ul>
  );
}
export default SocialMedia;
