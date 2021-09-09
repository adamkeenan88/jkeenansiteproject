const PostController = require("../controllers/post.controller");
const { authenticate } = require("../middleware/jwt.middleware");

module.exports = (app) => {
  // These are both protected routes.
  // First, express gets the route. Then we add authenticate middleware BEFORE the controller. Then the controllers.
  // The request will not get to the controller is authenticate function fails
  app.post("/api/post", authenticate, PostController.addNewPost);
  app.get("/api/post", authenticate, PostController.getAllPosts);
};
