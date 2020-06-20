import Head from "next/head";
import AOS from 'aos';
import { useEffect } from "react";

const BACK_IMAGE = "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>

      <main>
        <div className="hero header is-large">
          <div className="hero-body">
            <div className="container has-text-centered" data-aos="fade-up">
                <h2 className="title">Eugénie Huynh-Van</h2>
                <h1 className="subtitle">Diététicienne, Nutritionniste</h1>
            </div>
            </div>
        </div>
        <div className="hero is-medium">
            <div className="hero-body">
                <h1 className="subtitle">Coucou</h1>
            </div>
        </div>
      </main>
      <style jsx>
        {`
          .hero.header {
            background-image: url(${BACK_IMAGE});
            background: linear-gradient(rgba(31, 44, 108, 0.65), rgba(31, 44, 108, 0.65)), rgba(0, 0, 0, 0.55) url(${BACK_IMAGE}) no-repeat;
            background-attachment: fixed;
            background-size: cover;
            color: white;
            box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
            font-family: 'Poppins', sans-serif;
          }
          
        .hero.header .title {
            font-family: 'Kaushan Script', sans-serif;
            font-size: 5rem;
            color: whitesmoke;
        }

        .hero.header .subtitle {
            padding: 5px;
            color: whitesmoke;
        }

        `}
      </style>
    </>
  );
}
