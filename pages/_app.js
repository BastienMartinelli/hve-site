import React from "react";
import Link from "next/link";

import "../styles/styles.sass";

function App({ Component, pageProps }) {
  return (
    <div className="container">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <h1 className="navbar-item">Eugénie Huynh-Van</h1>
        </div>
        <div className="navbar-end">
          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className="navbar-menu">
          <div className="navbar-start">
            <Link href="/">
              <a className="navbar-item">Home</a>
            </Link>
            <Link href="/contact">
              <a className="navbar-item">Contact</a>
            </Link>
            <Link href="/blog">
              <a className="navbar-item">Blog</a>
            </Link>
          </div>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  );
}

export default App;
