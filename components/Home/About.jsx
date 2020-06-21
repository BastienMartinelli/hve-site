import React, { useState } from "react";

function About() {
  const [showInsta, setShowInsta] = useState(false);

  return (
    <div className="section-light about-me">
      <div className="container">
        <br />
        <div className="column is-12 about-me">
          <h1 className="title has-text-centered section-title">Qui suis-je ?</h1>
        </div>
        <br />
        <div className="columns is-multiline is-centered">
          <div
            className="column is-4 has-vertically-aligned-content"
            data-aos="fade-right"
          >
            <br />
            <p className="about-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas euismod risus luctus aliquet pulvinar. Fusce eu ultrices tellus. Cras non leo at nunc ultrices convallis efficitur non metus. Sed eleifend lacus nisi, egestas malesuada sapien tristique dapibus. Aliquam erat volutpat. Etiam facilisis leo quam, vitae pellentesque ipsum congue eget
              </p>
            <br />
            <div className="icons">
              <a className="button is-rounded" href="https://www.linkedin.com/in/hve2020/?originalSubdomain=fr">
                <span className="icon is-small">
                  <i className="fa fa-linkedin"></i>
                </span>
              </a>
              <a className="button is-rounded" href="https://www.facebook.com/ateliersdiet/">
                <span className="icon is-small">
                  <i className="fa fa-facebook"></i>
                </span>
              </a>
              <div className={`modal ${showInsta ? "is-active" : ""}`}>
                {showInsta && (
                  <>
                    <div data-aos="fade" className="modal-background" onClick={() => setShowInsta(false)} />
                    <div data-aos="fade-up" className="modal-content">
                      <img src="/insta.png" className="insta" />
                    </div>
                  </>
                )}
                <button className="modal-close is-large" aria-label="close" onClick={() => setShowInsta(false)} />
              </div>
              <button className="button is-rounded" onClick={() => setShowInsta(true)}>
                <span className="icon is-small">
                  <i className="fa fa-instagram"></i>
                </span>
              </button>
            </div>

          </div>
          <div className="column is-4 right-image" data-aos="fade-left">
            <img
              className="is-rounded"
              src="/avatar.jpg"
              alt="me"
              width="300px"
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        .section-light.about-me .is-larger {
          font-size: 1.2rem;
        }

        .right-image img {
          border-radius: 11px;
          margin: 20px;
          box-shadow: 0 5px 20px rgba(14, 25, 80, 0.3);
        }

        @media screen and (max-width: 840px) {
          .right-image {
            text-align: center;
          }
        }

        .about-text {
          text-align: justify;
          margin-left: 20px;
          margin-right: 20px;
        }

        .icons {
          display: flex;
          justify-content: center;
        }

        .icons > * {
          margin: 8px;
        }

        .modal-content {
          display: flex;
          justify-content: center;
        }

        .insta {
          max-width: 300px;
        }
      `}</style>
    </div>
  )
}

export default About;
