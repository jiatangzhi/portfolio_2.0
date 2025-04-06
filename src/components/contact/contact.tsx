import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="flex flex-col">
      <h1 className="text-xl font-semibold text-[var(--lightest-slate)] md:hidden py-2 md:py-0">
        Contact
      </h1>
      <div className="">
        Enjoyed my work? Got an idea or a project in mind? Let’s team up and
        build something amazing!{" "}
        <a
          href="mailto:jiaxintangzhi@gmail.com"
          className="text-[var(--green-bright)] group md:px-1"
        >
          <br className="md:hidden" />
          <br className="md:hidden" />
          Feel free to reach out
          <FontAwesomeIcon
            icon={faArrowRight}
            className="inline h-[16px] hover:text-[var(--green-bright)] px-2 translate-y-[3px] duration-150 group-hover:translate-x-1"
            size="xs"
          />
        </a>
      </div>
    </section>
  );
}
