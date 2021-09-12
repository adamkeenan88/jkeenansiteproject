import axios from "axios";
import React, { useState } from "react";
import { navigate, Link } from "@reach/router";
import jkeenan from "./jkeenanlogo.jpeg";
import "bulma/css/bulma.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Login = () => {
  // declare state vars
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setErr("");
    setSuccessMsg("");
    const postData = { email, password };
    axios
      .post(
        "http://localhost:8000/api/login",
        postData,
        {
          withCredentials: true,
        },
        navigate("/jessicakeenan/reviews")
      )
      .then((response) => setSuccessMsg(response.data.message))
      .catch((err) => setErr(err.response.data.err));
  };
  const handleLogout = () => {
    axios
      .post("http://localhost:8000/api/logout")
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
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
        <h1 class="content is-medium">
          <strong>LOGIN</strong>
        </h1>
        {err && <h3 style={{ color: "red" }}>{err}</h3>}
        {successMsg.length > 0 && (
          <h3 style={{ color: "green" }}>{successMsg}</h3>
        )}
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
              placeholder="password123!"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <button class="button is-link is-outlined is-rounded" type="submit">
          SUBMIT
        </button>
        <button
          class="button is-link is-outlined is-rounded"
          onClick={() => handleLogout()}
        >
          LOGOUT
        </button>
        <button class="button is-link is-outlined is-rounded">
          <Link to={"/jessicakeenan/reviews"}>Back to Reviews Page</Link>
        </button>
      </form>
    </div>
  );
};

export default Login;
