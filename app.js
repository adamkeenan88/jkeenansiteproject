import "./App.css";
import { Router, Link } from "@reach/router";
import Login from "./components/Login";
import Register from "./components/Register";
import PostForm from "./components/PostForm";
import DisplayPosts from "./components/DisplayPosts";
function App() {
  return (
    <div className="App">
      <div>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/new-post">New Post</Link>
          </li>
          <li>
            <Link to="/view-posts">View Posts</Link>
          </li>
        </ul>
      </div>
      <Router>
        <Login path="/login" />
        <Register path="/register" />
        <PostForm path="/new-post" />
        <DisplayPosts path="/view-posts" />
      </Router>
    </div>
  );
}

export default App;
