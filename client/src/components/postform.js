import React, { useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";
import { Link } from "@reach/router";
import jkeenan from "./jkeenanlogo.jpeg";
import "bulma/css/bulma.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [authError, setAuthError] = useState("");
  const [errors, setErrors] = useState({});
  const handleSubmit = async (e) => {
    e.preventDefault();
    const postData = {
      title,
      text,
    };
    try {
      const newPost = await axios.post(
        "http://localhost:8000/api/post",
        postData,
        { withCredentials: true },
        navigate("/jessicakeenan/reviews")
      );
      console.log(newPost);
    } catch (error) {
      if (error.response.status === 401) {
        setAuthError("You must first login to add a new post");
      } else {
        setErrors(error.response.data.errors);
      }
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
        <h1>Add new post</h1>
        {authError && <h3>{authError}</h3>}
        {errors
          ? Object.keys(errors).map((objKey, index) => (
              <p key={index}>{errors[objKey].message}</p>
            ))
          : null}
        <div class="field is-horizontal">
          <label class="label">Title: </label>
          <div class="control">
            <input
              class="input is-normal"
              type="text"
              value={title}
              placeholder="example"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>
        <div>
          Post Text:
          <textarea
            id=""
            cols="30"
            onChange={(e) => setText(e.target.value)}
            rows="10"
            value={text}
          ></textarea>
          <button
            class="button is-primary is-outlined is-rounded"
            type="submit"
          >
            Add Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostForm;
