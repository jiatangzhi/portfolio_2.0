import {
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

export default function SideSocials() {
  const socials = [
    {
      name: "GitHub",
      icon: faGithub,
      href: "https://github.com/jiatangzhi",
    },
    {
      name: "LinkedIn",
      icon: faLinkedinIn,
      href: "https://www.linkedin.com/in/jiatangzhi/",
    },
  ];

  return (
    <div className="side-socials">
      {socials.map((social, index) => (
        <Link key={index} href={social.href} target="_blank">
          <FontAwesomeIcon icon={social.icon} className="h-[20px]" />
        </Link>
      ))}
    </div>
  );
}
