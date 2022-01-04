import React from "react";
import { Link } from "@reach/router";
import jkeenan from "./jkeenanlogo.jpeg";
import contact from "./contactus.jpg";
import "bulma/css/bulma.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
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
            <button class="button is-primary">Home</button>
          </Link>
          <Link to={"/blogs"} class="navbar-item">
            <button class="button is-primary">Blogs</button>
          </Link>
          <Link to={"/books"} class="navbar-item">
            <button class="button is-primary">Books</button>
          </Link>
          <Link to={"/classes"} class="navbar-item">
            <button class="button is-primary">Classes</button>
          </Link>
          {/* <Link to={"/reviews"} class="navbar-item">
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
          <img src={contact} alt="contact icon" />
        </div>
        <div class="column is-half">
          <p class="content is-large">
            <strong>EMAIL:</strong>
          </p>
          <p class="content is-normal">braleyjessica@gmail.com</p>
          <p class="content is-large">
            <strong>LINKEDIN:</strong>
            <p class="content is-normal">
              <a href="https://www.linkedin.com/in/jessica-keenan-918937a3/">
                Jessica Keenan LinkedIn Page
              </a>
            </p>
            <p class="content is-large">
              <strong>COMPANY PAGE:</strong>
            </p>
            <p class="content is-normal">
              <a href="https://bdiplayhouse.com">BDI Playhouse Website</a>
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
