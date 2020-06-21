import React from "react";
import Link from "next/link";

import "../styles/styles.sass";
import Head from "next/head";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous" />
      </Head>
      <div className="container">
        <nav className="navbar sticky" role="navigation" aria-label="main navigation">
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
          .sticky {
            position: sticky;
          }
        `}
      </style>
    </>
  );
}

export default App;
