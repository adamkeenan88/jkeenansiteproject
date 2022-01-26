import React from "react";
import { Link } from "@reach/router";
import bcover from "./COVER.png";
import bookcover from "./Hendrix_Hears_a_Sound_Cover.jpeg";
import "bulma/css/bulma.min.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Books = () => {
  return (
    <div>
      <article class="media">
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
        <nav class="navbar" role="navigation" aria-label="main navigation">
          <div class="navbar-menu is-active">
            <div id="navbarBasicExample" class="navbar-menu is-flex-mobile">
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
                {/* <Link to={"/jessicakeenan/reviews"} class="navbar-item">
            <button class="button is-primary">Therapy Reviews</button>
          </Link> */}
              </div>
              <a
                role="button"
                class="navbar-burger"
                aria-label="menu"
                href
                aria-expanded="false"
                data-target="navbarBasicExample"
              >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
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
      </article>
      <div class="columns is-multiline is-mobile is-vcentered">
        <div class="column is-half">
          <img src={bookcover} alt="book cover" />
        </div>
        <div class="column is-half">
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
          <a href="https://amazon.com/">
            <button class="button is-danger is-rounded">Shop Now!</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Books;
