import React from "react";
import { Link } from "@reach/router";
import jkeenan from "./jkeenanlogo.jpeg";
import babygiggle from "./henny_giggling.jpeg";
import babyeating from "./babyeating.jpeg";
import breastfeeding from "./breastfeeding.jpeg";
import "bulma/css/bulma.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Blogs = () => {
  return (
    <div>
      <section class="jklogo">
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
            <button class="button is-primary">Home</button>
          </Link>
          <Link to={"/books"} class="navbar-item">
            <button class="button is-primary">Books</button>
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
      <section>
        <h1 style={{ textAlign: "left", fontWeight: "bold", fontSize: "40px" }}>
          Blog Posts
        </h1>
        <br></br>
        <article class="media">
          <figure class="media-left">
            <p class="image is-64x64">
              <img class="is-rounded" src={babyeating} alt="baby eating" />
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
                src={breastfeeding}
                alt="breastfeeding mother"
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
              <img class="is-rounded" src={babygiggle} alt="baby laughing" />
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
