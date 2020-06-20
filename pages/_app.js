import React from "react";
import Link from "next/link";

import "../styles/styles.sass";

function App({ Component, pageProps }) {
  return (
    <>
      <div className="container">
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
            <h1 className="navbar-item name">Eugénie Huynh-Van</h1>
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
              <div className="navbar-end">
                <Link href="/">
                <a className="navbar-item">Accueil</a>
                </Link>
                <Link href="/contact">
                <a className="navbar-item">Me Contacter</a>
                </Link>
                <Link href="/blog">
                <a className="navbar-item">Blog</a>
                </Link>
            </div>
            </div>
        </nav>
      </div>
      <Component {...pageProps} />
      <style jsx>
          {`
            h1.name {
              font-family: 'Kaushan Script', sans-serif;
            }
          `}
      </style>
    </>
  );
}

export default App;
