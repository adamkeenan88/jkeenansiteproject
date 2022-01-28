import React from "react";
import { Link } from "@reach/router";
import bcover from "./COVER.png";
import "bulma/css/bulma.min.css";

const Creators = () => {
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
                <Link to={"/books"} class="navbar-item is-tab">
                  <button class="button is-primary">Books</button>
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
      <div>
        <section>
          <h1
            style={{ textAlign: "left", fontWeight: "bold", fontSize: "40px" }}
          >
            Meet the creators of The Sensory Series:
          </h1>
          <br></br>
          <p>
            Jessica Keenan- Author It's to no-one's surprise, but her own, that
            Jessica ended up in the pediatric field. The eldest of four, she
            started building her kid skills well before the age of 5. Jessica
            evolved her skillset from bossy big sister to summer swim teacher.
            With her heart set on becoming an architect, Jessica worked for a
            firm where she spent her hours re-doing the library and copying CAD
            drawings. It was about 30 minutes into the job that Jessica realized
            that this was definitely not her future. Instead of going to
            university like all her peers she decided to study abroad for a year
            in Argentina, where she found her passion for language acquisition
            and development. Fast forward a few years and you will find Jessica
            has added a few titles to her name: wife, mother, speech language
            pathologist, early intervention specialist, certified lactation
            counselor, and author. Jessica provides an array of one-on-one
            speech, language, and/or feeding interventions to infants and
            children. She is often seen teaching parent and child classes or in
            her community working with parents and teachers through her
            workplace. Jessica's love for children's books really cemented
            through her work and motherhood. One book has the magical ability to
            be scaffolded to benefit a child of any age. The children she works
            with and her son inspire her every day and fuel her passion!
          </p>
          <br></br>
          <p>
            Shari Borba - Illustrator Shari Borba grew up dancing to the beat of
            her own drum in the Pacific North West. At a young age, she had a
            passion for life that expressed itself through art, music, sports
            and spending time in the outdoors. With curiosity and a love for
            helping others, Shari moved to California after high school to
            pursue education in becoming a math teacher. The universe had other
            plans. After meeting her now husband at Cal Poly, Shari surprised no
            one when she switched her major to Anthropology, Sociology and
            Geography and ultimately went on to law school to become an
            attorney. Shari now lives happily with her husband, three young
            children and two boston terriers in a small town in central
            California. Expressing emotion and ingenuity through art, Shari
            continues to be inspired by the world around her and is excited to
            share her love of living mindfully and thinking outside of the box
            with her latest pursuit into illustrating children’s books.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Creators;
