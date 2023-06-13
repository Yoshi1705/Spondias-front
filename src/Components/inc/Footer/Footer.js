import React from "react";
import "./Footer.css";

import { FaChevronRight } from "react-icons/fa";

const LinkItem = ({ text, href }) => (
  <li>
    <FaChevronRight
      style={{
        paddingRight: "2px",
        color: "#29a9e2",
        fontSize: "18px",
        lineHeight: "1",
        height: "11px",
      }}
    />
    <a href={href}>{text}</a>
  </li>
);

function Footer() {
  const usefulLinks = [
    { text: "Home", href: "index.php" },
    { text: "About us", href: "about.php" },
    { text: "Services", href: "services.php" },
    { text: "Terms of service", href: "#" },
    { text: "Privacy policy", href: "#" },
  ];

  const ourServices = [
    { text: "Web Design", href: "index.php" },
    { text: "Web Development", href: "about.php" },
    { text: "Product Management", href: "services.php" },
    { text: "Marketing", href: "#" },
    { text: "Graphic Design", href: "#" },
  ];

  return (
    <footer id="footer" className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 text-center footer-contact">
              <h3>SPONDIAS</h3>
              <p>
                <strong>UK</strong>
                <br />
                "20-22 Wenlock Road, London,"
                <br />
                England, N1 7GU
                <br />
                <br />
                <strong>INDIA#</strong>
                <br />
                Chadika vari Street, Jagannaickpur,
                <br />
                "Kakinada, 533002"
              </p>
            </div>
            <div className="col-md-4 footer-links">
              <h4>Useful Links</h4>
              <ul>
                {usefulLinks.map((link, index) => (
                  <LinkItem key={index} text={link.text} href={link.href} />
                ))}
              </ul>
            </div>
            <div className="col-md-4 text-center footer-links">
              <h4>Our Services</h4>
              <ul>
                {ourServices.map((service, index) => (
                  <LinkItem key={index} text={service.text} href={service.href} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className=" container d-md-flex py-4">
        <div className="me-md-auto text-center text-md-start">
          <div className="copyright">
            © {new Date().getFullYear()} All Rights Reserved
          </div>
          <div className="credits">
            Designed by <a href="#">Spondias Pvt Ltd</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
