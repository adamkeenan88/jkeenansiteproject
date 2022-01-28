import React from "react";
import { Link } from "@reach/router";
import bcover from "./COVER.png";
import "bulma/css/bulma.min.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
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
                <Link to={"/resources"} class="navbar-item is-tab">
                  <button class="button is-primary">Resources</button>
                </Link>
                <Link to={"/blogs"} class="navbar-item is-tab">
                  <button class="button is-primary">Blog</button>
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
      <div class="columns is-multiline is-mobile is-vcentered">
        <div class="column is-full">
          <p class="content is-large">
            <strong>EMAIL:</strong>
          </p>
          <p class="content is-normal">
            <a href="mailto:thesensoryseries@gmail.com">
              thesensoryseries@gmail.com
            </a>
          </p>
          <p class="content is-large">
            <strong>INSTAGRAM:</strong>
          </p>
          <p class="content is-normal">
            <a href="https://www.instagram.com/thesensoryseries/">
              The Sensory Series Instagram Page
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
