import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <div className="container">
      <div className="top-navigation">
        <nav>
          <ul>
            <li>
              <div className="top-navigation-button">
                <Link to="/">Home</Link>
              </div>
            </li>
            <li>
              <div className="top-navigation-button">
                <Link to="/catalog">Catalog</Link>
              </div>
            </li>
            <li>
              <div className="top-navigation-button">
                <Link to="/news">News</Link>
              </div>
            </li>
            <li>
              <div className="top-navigation-button">
                <Link to="/downloads">Downloads</Link>
              </div>
            </li>
            <li>
              <div className="top-navigation-button">
                <Link to="/about">About</Link>
              </div>
            </li>
          </ul>
        </nav>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  )
};

export default Layout;