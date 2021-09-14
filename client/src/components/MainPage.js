import React from "react";
import { Link } from "@reach/router";
import jkeenan from "./jkeenanlogo.jpeg";
import familypic from "./familypic.jpeg";
import "bulma/css/bulma.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Main = () => {
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
          <Link to={"/jessicakeenan/blogs"} class="navbar-item">
            <a class="button is-primary">Blogs</a>
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
      <div class="columns is-multiline is-mobile is-vcentered">
        <div class="column is-half">
          <p class="content is-large">
            <strong>Hi! I'm Jessica...</strong>
          </p>
          <p class="content is-normal">
            ...speech language pathologist, certified lactation counselor, mom,
            and author, specializes in pediatric development. Jessica provides
            an array of one-on-one speech, language, and/or feeding
            interventions to infants and children. She is often seen teaching
            parent and child classes or in her community working with parents
            and teachers through her workplace, BDI Playhouse Children's
            Therapy. Jessica's love for children's books really cemented through
            her work and motherhood. One book has the magical ability to be
            scaffolded to benefit a child of any age. The children she works
            with and her son inspire her every day and fuel her passions!
          </p>
        </div>
        <div class="column is-half">
          <img src={familypic} />
        </div>
      </div>
    </div>
  );
};

export default Main;
