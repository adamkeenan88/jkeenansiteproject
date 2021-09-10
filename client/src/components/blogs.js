import React from "react";
import { Link } from "@reach/router";
import jkeenan from "./jkeenanlogo.jpeg";
import "bulma/css/bulma.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Blogs = () => {
  return (
    <div>
      <section class="jklogo">
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
          <Link to={"/jessicakeenan/books"} class="navbar-item">
            <a class="button is-primary">Books</a>
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
      <section>
        <h1 style={{ textAlign: "left", fontWeight: "bold", fontSize: "40px" }}>
          Blog Posts
        </h1>
        <article class="media">
          <figure class="media-left">
            <p class="image is-64x64">
              <img
                class="is-rounded"
                src="https://bulma.io/images/placeholders/128x128.png"
              />
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>Introducing Foods to Babies</strong>{" "}
                <small>BDI Playhouse</small>
                <br></br>
                Strategies for successfully transitiong baby to solid food.
                <br></br>
                <a href="https://bdiplayhouse.com/introducing-food-to-baby/">
                  Click here to read!
                </a>
              </p>
            </div>
          </div>
        </article>
        <hr></hr>
        <article class="media">
          <figure class="media-left">
            <p class="image is-64x64">
              <img
                class="is-rounded"
                src="https://bulma.io/images/placeholders/128x128.png"
              />
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>Benefits of Breastfeeding</strong>{" "}
                <small>BDI Playhouse</small>
                <br></br>
                There are significant benefits of choosing to breastfeed your
                baby! Read on to find out how breastfeeding benefits baby, mom,
                and society!
                <br></br>
                <a href="https://bdiplayhouse.com/benefits-of-breastfeeding/">
                  Click here to read!
                </a>
              </p>
            </div>
          </div>
        </article>
        <hr></hr>
        <article class="media">
          <figure class="media-left">
            <p class="image is-64x64">
              <img
                class="is-rounded"
                src="https://bulma.io/images/placeholders/128x128.png"
              />
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>Language Development in Children</strong>
                <small>BDI Playhouse</small>
                <br></br>
                Language development is a key component of childhood, but what
                should you do if your child isn't crushing their milestones?
                Here are 3 quick tips!
                <br></br>
                <a href="https://bdiplayhouse.com/language-deveolopment-tips/">
                  Click here to read!
                </a>
              </p>
            </div>
          </div>
        </article>
        <hr></hr>
      </section>
    </div>
  );
};

export default Blogs;
