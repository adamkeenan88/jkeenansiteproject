import React from "react";
import { Link } from "@reach/router";
import bcover from "./COVER.png";
import smallprint from "./HHSTSSPrintOutsSmall.pdf";
import largeprint from "./HHSTSSPrintOutsLarge.pdf";
import "bulma/css/bulma.min.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Resources = () => {
  function toggleBurgerMenu() {
    document.querySelector(".navbar-menu").classList.toggle("is-active");
  }
  return (
    <div>
      <div class="columns is-narrow-mobile">
        <div class="column is-1">
          <figure class="media-left">
            <a class="image is-96x96" href="/">
              <img
                src={bcover}
                width="65"
                height="100"
                alt="Sensory Series Logo"
              />
            </a>
          </figure>
        </div>
        <div class="column">
          <nav
            class="navbar is-spaced"
            role="navigation"
            aria-label="main navigation"
          >
            <div class="navbar-brand">
              <div
                role="button"
                class="navbar-burger"
                aria-label="menu"
                aria-expanded="false"
                data-target="Options"
                onClick={toggleBurgerMenu}
                href
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div id="Options" class="navbar-menu">
              <div class="navbar-start">
                <Link to={"/"} class="navbar-item is-tab">
                  <button class="button is-primary">Home</button>
                </Link>
                <Link to={"/creators"} class="navbar-item is-tab">
                  <button class="button is-primary">Creators</button>
                </Link>
                <Link to={"/books"} class="navbar-item is-tab">
                  <button class="button is-primary">Books</button>
                </Link>
                <Link to={"/blogs"} class="navbar-item is-tab">
                  <button class="button is-primary">Blog</button>
                </Link>
                <Link to={"/contact"} class="navbar-item is-tab">
                  <button class="button is-primary">Contact Us!</button>
                </Link>
              </div>
            </div>

            {/* <div class="navbar-end">
              <div class="navbar-item">
                <div class="icon is-large">
                  <FontAwesomeIcon icon={["fab", "facebook"]} />
                  <a href="https://www.linkedin.com/in/jessica-keenan-918937a3/">
                    <FontAwesomeIcon icon={["fab", "linkedin"]} />
                  </a>
                </div>
              </div>
            </div> */}
          </nav>
        </div>
      </div>
      <section>
        <h1 style={{ textAlign: "left", fontWeight: "bold", fontSize: "40px" }}>
          Resources
        </h1>
        <br></br>
        <h3>
          <strong>Download The Book Activity Sheet:</strong>
        </h3>
        <br></br>
        <p>
          Small print sheet:{" "}
          <a href={smallprint} target="_blank" rel="noopener">
            Open Here
          </a>
        </p>
        <br></br>
        <p>
          Large print sheet:{" "}
          <a href={largeprint} target="_blank" rel="noopener">
            Open Here
          </a>
        </p>
      </section>
    </div>
  );
};

export default Resources;
