import React from "react";
import { BsGithub, BsInstagram, BsTiktok } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <a
      href="https://www.instagram.com/yaya_13_yaya/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div>
        <BsInstagram />
      </div>
    </a>

    <a
      href="https://www.facebook.com/yaya.cfcyaya"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div>
        <FaFacebookF />
      </div>
    </a>

    <a
      href="https://www.tiktok.com/@userweb19 "
      target="_blank"
      rel="noopener noreferrer"
    >
      <div>
        <BsTiktok />
      </div>
    </a>
    <a
      href="https://github.com/yayano"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div>
        <BsGithub />
      </div>
    </a>
  </div>
);

export default SocialMedia;
