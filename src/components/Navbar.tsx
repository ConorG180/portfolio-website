type Link = {
  name: string;
  href: string;
  color: string;
};

interface Props {
  links: Link[];
}

function Navbar({ links }: Props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-dark bg-dark">
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
                  >
                    {link.name}
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
