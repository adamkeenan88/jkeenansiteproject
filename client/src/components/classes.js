import React from "react";
import { Link } from "@reach/router";
import jkeenan from "./jkeenanlogo.jpeg";
import "bulma/css/bulma.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Classes = () => {
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
          <Link to={"/contact"} class="navbar-item">
            <button class="button is-primary">Contact Jessica</button>
          </Link>
          {/* <Link to={"/jessicakeenan/reviews"} class="navbar-item">
            <a class="button is-primary">Therapy Reviews</a>
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
          Available Classes
        </h1>
        <br></br>
        <article class="media">
          <div class="media-content">
            <div class="content">
              <p>
                <strong>
                  Navigating Newborns: Tummy Time, Feeding, and Colic Oh My!
                </strong>
                <small>BDI Playhouse</small>
                <br></br>
                Buckle up and BYOM (Bring Your Own Milk). Parenthood is anything
                but a straight and simple drive! In Navigating Newborns, our
                pediatric therapists will share all of their top tips that will
                allow you to conquer any speed bumps, roadblocks, or detours you
                may experience with your baby (from the comfort of your home).
                This 4 part live virtual class will offer a safe space to ask
                any and all questions pertaining to your infant’s development
                while demonstrating hands-on activities to help your baby be
                their best!
                <br></br>
                <a href="https://bdiplayhouse.com/parent-child-classes/">
                  Click here to read more and sign up today!
                </a>
              </p>
            </div>
          </div>
        </article>
        <hr></hr>
        <article class="media">
          <div class="media-content">
            <div class="content">
              <p>
                <strong>Talk and Groove</strong> <small>BDI Playhouse</small>
                <br></br>
                Ages: 1 to 3 Years This movement and language group is designed
                to enhance development for the toddler and preschool aged child.
                Parents will learn practical strategies to help their child
                learn language naturally throughout the day.
                <br></br>
                <a href="https://bdiplayhouse.com/parent-child-classes/">
                  Click here to read more and sign up today!
                </a>
              </p>
            </div>
          </div>
        </article>
        <hr></hr>
        <article class="media">
          <div class="media-content">
            <div class="content">
              <p>
                <strong>Language Development in Children</strong>
                <small>BDI Playhouse</small>
                <br></br>
                Learn How to Prepare your Family to Support a Successful
                Breastfeeding Experience!
                <br></br>
                <a href="https://bdiplayhouse.com/parent-child-classes/">
                  Click here to read more and sign up today!
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

export default Classes;
