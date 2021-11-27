import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div>
        <h1>
          <Link to="/" className="logo">
            Mou's Gadgets
          </Link>
        </h1>
      </div>
      <div className="header-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/cart" className>
              <i class="fas fa-shopping-cart" />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
