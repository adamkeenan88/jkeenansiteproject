const mongoose = require("mongoose");

const PostSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "post title is required"],
    },
    text: {
      type: String,
      required: [true, "text is required"],
    },
    // This is a ref to another collection
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    // embed comments belonging to that post inside post document
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
