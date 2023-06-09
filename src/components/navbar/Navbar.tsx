import { useState } from "react";
import "./Navbar.css";

type Link = {
  name: string;
  href: string;
  color: string;
};

interface Props {
  links: Link[];
}
// .nav-link[data-index="${index}"].active span::before,
// .nav-link[data-index="${index}"].active span::after
function Navbar({ links }: Props) {
  const [activeLink, setActiveLink] = useState(-1);

  // Styling for colors on hover and active links
  const hoverStyles = links
    .map(
      (link, index) => `
      .nav-link[data-index="${index}"]:hover::before,
      .nav-link[data-index="${index}"]:hover::after,
      .nav-link[data-index="${index}"] span:hover::before,
      .nav-link[data-index="${index}"] span:hover::after,
      .nav-link[data-index="${index}"].active::before,
      .nav-link[data-index="${index}"].active::after,
      .nav-link[data-index="${index}"].active span::before,
      .nav-link[data-index="${index}"].active span::after {
        background-color: ${link.color};
      }
      .nav-link[data-index="${index}"]:hover span,
      .nav-link[data-index="${index}"].active span {
        color: #fff;
      }
      .nav-link[data-index="${index}"].active::before,
      .nav-link[data-index="${index}"].active::after {
        left: 0;
        right: 0;
      }
      .nav-link[data-index="${index}"].active span::before,
      .nav-link[data-index="${index}"].active span::after {
        top: 0;
        bottom: 0;
      }
    `
    )
    .join("\n");

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-dark bg-dark">
      <style>{hoverStyles}</style>
      <div className="container-fluid justify-content-center">
        <a className="navbar-brand nav-brand-logo-link d-flex justify-content-center justify-content-lg-start me-0" href="#">
          <img
            src="/images/cg-productions-logo-without-background.png"
            alt="CG productions logo"
            className="brand-logo nav-brand-logo"
          />
        </a>

        <div
          className="collapse d-flex justify-content-center links-container navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-lg-auto align-items-center mb-2 mb-lg-0">
            {links.map((link, index) => {
              return (
                <li key={index} className="nav-item">
                  <a
                    className={`nav-link ${activeLink === index && "active"}`}
                    aria-current="page"
                    href={link.href}
                    data-index={index}
                    onClick={(e) => setActiveLink(index)}
                  >
                    <span>{link.name}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
