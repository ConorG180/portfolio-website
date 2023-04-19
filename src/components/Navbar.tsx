type Link = {
  name: string;
  href: string;
  color: string;
};

interface Props {
  links: Link[];
}

function Navbar({ links }: Props) {
  const hoverStyles = links
    .map(
      (link, index) => `
        .nav-link[data-index="${index}"]:hover::before,
        .nav-link[data-index="${index}"]:hover::after,
        .nav-link[data-index="${index}"] span:hover::before,
        .nav-link[data-index="${index}"] span:hover::after {
          background-color: ${link.color};
        }
      `
    )
    .join("\n");

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-dark bg-dark">
      <style>{hoverStyles}</style>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div
          className="collapse d-flex links-container navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto ms-auto mb-2 mb-lg-0">
            {links.map((link, index) => {
              return (
                <li key={index} className="nav-item">
                  <a
                    className="nav-link"
                    aria-current="page"
                    href={link.href}
                    data-index={index}
                    // style={{ color: link.color }}
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
