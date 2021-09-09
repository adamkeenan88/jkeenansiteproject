import React, { useState } from "react";
import axios from "axios";

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
        { withCredentials: true }
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
    <form onSubmit={handleSubmit}>
      <h1>Add new post</h1>
      {authError && <h3>{authError}</h3>}
      {errors
        ? Object.keys(errors).map((objKey, index) => (
            <p key={index}>{errors[objKey].message}</p>
          ))
        : null}
      <div>
        Title:{" "}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        Post Text:{" "}
        <textarea
          id=""
          cols="30"
          onChange={(e) => setText(e.target.value)}
          rows="10"
          value={text}
        ></textarea>
        <button type="submit">Add Post</button>
      </div>
    </form>
  );
};

export default PostForm;
