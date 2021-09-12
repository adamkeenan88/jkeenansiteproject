import axios from "axios";
import React, { useEffect, useState } from "react";

const DisplayPosts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get("http://localhost:8000/api/post", {
          withCredentials: true,
        });
        console.log(response);
        setPosts(response.data);
      } catch (err) {
        console.log(err.response);
      }
    }
    getData();
  });

  return (
    <div>
      {posts &&
        posts.map((post, index) => (
          <div key={index}>
            <h2>{post.title}</h2>
            <p>{post.text}</p>
            {post.user_id && (
              <p>
                <strong>BY:</strong> {post.user_id.firstName}
                {post.user_id.lastName} <strong>ON</strong>
                {post.createdAt.slice(0, 10)}
              </p>
            )}
            <hr />
          </div>
        ))}
    </div>
  );
};
export default DisplayPosts;
