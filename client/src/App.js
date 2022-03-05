import "./App.css";
import { Router } from "@reach/router";
import Main from "./components/MainPage";
import Blogs from "./components/blogs";
import Books from "./components/books";
import Resources from "./components/resources";
import Contact from "./components/contact";
import Creators from "./components/creators";
import Blogtemplate from "./components/blogs/blogtemplate";
// import Reviews from "./components/reviews";
// import Register from "./components/register";
// import Login from "./components/login";
// import PostForm from "./components/postform";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <Blogs path="/blogs" />
        <Books path="/books" />
        <Resources path="/resources" />
        <Contact path="/contact" />
        <Creators path="/creators" />
        <Blogtemplate path="/blogone" />
        {/* <Reviews path="/jessicakeenan/reviews" />
        <Register path="/jessicakeenan/register" />
        <Login path="/jessicakeenan/login" />
        <PostForm path="/jessicakeenan/post" /> */}
      </Router>
    </div>
  );
}

export default App;
