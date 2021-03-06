import React, { useState } from "react";
import axios from "axios";
import { navigate, Link } from "@reach/router";
import jkeenan from "./jkeenanlogo.jpeg";
import "bulma/css/bulma.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Register = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [err, setErr] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const postData = {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    };
    try {
      await axios.post("http://localhost:8000/api/register", postData);
      navigate("/jessicakeenan/reviews");
    } catch (err) {
      console.log("error block", err.response);
      setErr(err.response.data.err);
    }
  };
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
      <form onSubmit={handleSubmit}>
        <h1 class="content is-large">
          <strong>Register To Leave A Review</strong>
        </h1>
        {err && <h3 style={{ color: "red" }}>{err}</h3>}
        <div class="field is-horizontal">
          <label class="label">First Name: </label>
          <div class="control">
            <input
              class="input is-normal"
              type="text"
              placeholder="John"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
        </div>
        <div class="field is-horizontal">
          <label class="label">Last Name: </label>
          <div class="control">
            <input
              class="input is-normal"
              type="text"
              placeholder="Smith"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div class="field is-horizontal">
          <label class="label">Email: </label>
          <div class="control">
            <input
              class="input is-normal"
              type="text"
              placeholder="user@example.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div class="field is-horizontal">
          <label class="label">Password: </label>
          <div class="control">
            <input
              class="input is-normal"
              type="text"
              placeholder="PassWord123!"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div class="field is-horizontal">
          <label class="label">Confirm Password: </label>
          <div class="control">
            <input
              class="input is-normal"
              type="text"
              placeholder="PassWord123!"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </div>

        <button class="button is-link is-outlined is-rounded" type="submit">
          SUBMIT
        </button>
        <button class="button is-link is-outlined is-rounded">
          <Link to={"/jessicakeenan/reviews"}>Back to Reviews Page</Link>
        </button>
      </form>
    </div>
  );
};

export default Register;
