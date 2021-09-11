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
        <Link to="/jessicakeenan/">
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
          <Link to={"/jessicakeenan"} class="navbar-item">
            <a class="button is-primary">Home</a>
          </Link>
          <Link to={"/jessicakeenan/blogs"} class="navbar-item">
            <a class="button is-primary">Blogs</a>
          </Link>
          <Link to={"/jessicakeenan/classes"} class="navbar-item">
            <a class="button is-primary">Classes</a>
          </Link>
          <Link to={"/jessicakeenan/contact"} class="navbar-item">
            <a class="button is-primary">Contact Jessica</a>
          </Link>
          <Link to={"/jessicakeenan/reviews"} class="navbar-item">
            <a class="button is-primary">Therapy Reviews</a>
          </Link>
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
          <img src={bookcover} />
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