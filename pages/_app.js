import React from "react";
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
            <a className="navbar-item">Home</a>
            <a className="navbar-item">Contact</a>
            <a className="navbar-item">Blog</a>
          </div>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  );
}

export default App;
