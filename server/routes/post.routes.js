const PostController = require("../controllers/post.controller");
const { authenticate } = require("../middleware/jwt.middleware");

module.exports = (app) => {
  app.post("/api/post", authenticate, PostController.addNewPost);
  app.get("/api/post", authenticate, PostController.getAllPosts);
};
