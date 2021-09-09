import axios from "axios";
import React, { useEffect, useState } from "react";
const DisplayPosts = () => {
  const [posts, setPosts] = useState([]);
  const [commentTxt, setCommentTxt] = useState("");
  const [commentSubmitDummy, setCommentSubmitDummy] = useState(false);
  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get("http://localhost:8000/api/post", {
          withCredentials: true,
        });
        console.log(response);
        setPosts(response.data);
      } catch (error) {
        console.log(error.response);
      }
    }
    getData();
  }, [commentSubmitDummy]);

  const handleSubmitComment = async (e, postId) => {
    e.preventDefault();
    const newComment = {
      text: commentTxt,
    };
    try {
      const response = await axios.post(
        `http://localhost:8000/api/comment/${postId}`,
        newComment,
        { withCredentials: true }
      );
      console.log(response);
      setCommentSubmitDummy(!commentSubmitDummy);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {posts &&
        posts.map((post, index) => (
          <div key={index}>
            <h2>{post.title}</h2>
            <p>{post.text}</p>
            {post.user_id && (
              <p>
                <strong>BY:</strong> {post.user_id.firstName}{" "}
                {post.user_id.lastName} <strong>ON</strong>{" "}
                {post.createdAt.slice(0, 10)}
              </p>
            )}
            <h4>COMMENTS FOR THIS POST</h4>
            {post.comments &&
              post.comments.map((comment, index) => (
                <div key={index}>
                  <p>
                    {comment.user_id.firstName} {comment.user_id.lastName}{" "}
                    commented {comment.text}
                  </p>
                </div>
              ))}
            <form onSubmit={(e) => handleSubmitComment(e, post._id)}>
              <h5>ADD COMMENT</h5>
              <textarea
                name=""
                id=""
                onChange={(e) => setCommentTxt(e.target.value)}
                cols="15"
                rows="4"
              ></textarea>
              <button type="submit">Submit</button>
            </form>

            <hr />
          </div>
        ))}
    </div>
  );
};
export default DisplayPosts;
