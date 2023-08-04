import React from "react";
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
    faTwitter
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <footer className="footer">
              <h3>Follow Me</h3>
                <a href="https://github.com/"
                   className= "github social">
                   <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                <a href="https://www.linkedin.com/"
                   className= "linkedin social">
                   <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a href="https://twitter.com"
                   className= "twitter social">
                   <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                
        </footer>
    );
}