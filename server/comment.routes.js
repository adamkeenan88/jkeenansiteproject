const CommentController = require("../controllers/comment.controller");
const { authenticate } = require("../middleware/jwt.middleware");

module.exports = (app) => {
  app.post(
    "/api/comment/:postId",
    authenticate,
    CommentController.addNewComment
  );
};
