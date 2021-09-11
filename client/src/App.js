import "./App.css";
import { Router } from "@reach/router";
import Main from "./components/MainPage";
import Blogs from "./components/blogs";
import Books from "./components/books";
import Classes from "./components/classes";
import Contact from "./components/contact";
import Reviews from "./components/reviews";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/jessicakeenan" />
        <Blogs path="/jessicakeenan/blogs" />
        <Books path="/jessicakeenan/books" />
        <Classes path="/jessicakeenan/classes" />
        <Contact path="/jessicakeenan/contact" />
        <Reviews path="/jessicakeenan/reviews" />
      </Router>
    </div>
  );
}

export default App;