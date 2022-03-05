import React from "react";
import { Link } from "@reach/router";
import bcover from "./COVER.png";
import bookcover from "./Hendrix_Hears_a_Sound_Cover.jpeg";
import "bulma/css/bulma.min.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Books = () => {
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
                <Link to={"/resources"} class="navbar-item is-tab">
                  <button class="button is-primary">Resources</button>
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
      <div class="columns is-mobile is-vcentered">
        <div class="column is-half is-half-mobile">
          <img src={bookcover} alt="book cover" />
        </div>
        <div class="column is-half is-half-mobile">
          <p class="title is-1">
            <strong>The Sensory Series</strong>
          </p>
          <p class="content is-medium">
            First in the series, the illustrations and simple, rhyming text
            follows a little boy as he identifies sounds in his sensory abundant
            neighborhood. Written by a pediatric speech language pathologist and
            early intervention specialist, this book was created as a source for
            early language and speech sound development. Inspired by the
            children she works with and watching her young toddler experience
            the sensory abundant world around them, Jessica Keenan set out to
            write a series of books to highlight children's sensitivity and
            wonder to different sensory input.
          </p>
          <a
            rel="noopener noreferrer"
            href="https://www.amazon.com/Hendrix-Hears-Sound-Jessica-Keenan-ebook/dp/B09TKFJKD9/ref=sr_1_1?crid=3GDXR1BKQICH1&keywords=hendrix+hear+a+sound&qid=1646440926&sprefix=hendrix+hears+a+sound%2Caps%2C168&sr=8-1"
            target="_blank"
          >
            <button class="button is-danger is-rounded">Shop Now!</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Books;
