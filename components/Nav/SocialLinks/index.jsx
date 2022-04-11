import React from "react";

// Libs
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodepen,
  faDribbble,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

// CSS
import styles from "./SocialLinks.module.scss";

const SocialLinks = () => {
  return (
    <ul className={styles.icons}>
      <li>
        <a target="_blank" href="https://github.com/anfemoca19">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/andres-felipe-morales/"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </li>
      {/* <li>
        <a target="_blank" href="https://dribbble.com/jmejia1221">
          <FontAwesomeIcon icon={faDribbble} />
        </a>
      </li> */}
      <li>
        <a target="_blank" href="https://codepen.io/anfemoca19">
          <FontAwesomeIcon icon={faCodepen} />
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;
