import React from "react";
import { Link } from "@reach/router";
import bcover from "./COVER.png";
import booktitlepage from "./HendrixHearsaSoundBookTitle.png";
import "bulma/css/bulma.min.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Main = () => {
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
          <nav class="navbar" role="navigation" aria-label="main navigation">
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
                <a href={"/creators"} class="navbar-item is-tab">
                  <button class="button is-primary">Creators</button>
                </a>
                <a href={"/books"} class="navbar-item is-tab">
                  <button class="button is-primary">Books</button>
                </a>
                <a href={"/resources"} class="navbar-item is-tab">
                  <button class="button is-primary">Resources</button>
                </a>
                <a href={"/blogs"} class="navbar-item is-tab">
                  <button class="button is-primary">Blog</button>
                </a>
                <a href={"/contact"} class="navbar-item is-tab">
                  <button class="button is-primary">Contact Us!</button>
                </a>
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

      <div class="columns is-multiline is-mobile is-vcentered">
        <div class="column is-half is-offset-one-quarter">
          <Link to={"/books"}>
            <img src={booktitlepage} alt="Book Cover" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
