import React from "react";
import { Link } from "@reach/router";
import jkeenan from "./jkeenanlogo.jpeg";
import bookcover from "./Hendrix_Hears_a_Sound_Cover.jpeg";
import "bulma/css/bulma.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Books = () => {
  return (
    <div>
      <section classname="pageHeader">
        <Link to="/">
          <img
            class="jklogo"
            src={jkeenan}
            alt="JKeenan Logo"
            width="300"
            height="250"
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
        </Link>
      </section>
      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <Link to={"/"} class="navbar-item">
            <button type="" class="button is-primary">
              Home
            </button>
          </Link>
          <Link to={"/blogs"} class="navbar-item">
            <button class="button is-primary">Blogs</button>
          </Link>
          <Link to={"/classes"} class="navbar-item">
            <button class="button is-primary">Classes</button>
          </Link>
          <Link to={"/contact"} class="navbar-item">
            <button class="button is-primary">Contact Jessica</button>
          </Link>
          {/* <Link to={"/jessicakeenan/reviews"} class="navbar-item">
            <button class="button is-primary">Therapy Reviews</button>
          </Link> */}
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="icon is-large">
              <FontAwesomeIcon icon={["fab", "facebook"]} />
              <a href="https://www.linkedin.com/in/jessica-keenan-918937a3/">
                <FontAwesomeIcon icon={["fab", "linkedin"]} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="columns is-multiline is-mobile is-vcentered">
        <div class="column is-half">
          <img src={bookcover} alt="book cover" />
        </div>
        <div class="column is-half">
          <p class="title is-1">
            <strong>Sensory Series</strong>
          </p>
          <p class="content is-medium">
            Follow Hendrix as he navigates a sensory abundant world!
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
