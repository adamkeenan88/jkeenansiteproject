import React from "react";
import { Link } from "@reach/router";
import bcover from "./COVER.png";
import "bulma/css/bulma.min.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Blogs = () => {
  return (
    <div>
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
                  <Link to={"/books"} class="navbar-item is-tab">
                    <button class="button is-primary">Books</button>
                  </Link>
                  <Link to={"/resources"} class="navbar-item is-tab">
                    <button class="button is-primary">Resources</button>
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
      </div>
      <div>
        <section>
          <h1
            style={{ textAlign: "left", fontWeight: "bold", fontSize: "40px" }}
          >
            Blog Posts
          </h1>
          <br></br>
          <p>Coming soon!</p>
        </section>
      </div>
    </div>
  );
};

export default Blogs;
