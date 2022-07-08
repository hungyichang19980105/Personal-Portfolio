import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/hung-yi-chang-0290b6195/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/hungyichang19980105" target="_blank">
        <BsGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
