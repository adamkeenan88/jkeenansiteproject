const mongoose = require("mongoose");

// Each comment will need to be related to the post and the user who commented
const CommentSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "text is requred for comment"],
    },
    // ref to post
    post_id: {
      // note the specific data type for a ref
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
    // ref to id
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;
