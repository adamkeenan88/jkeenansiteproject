const jwt = require("jsonwebtoken");
const Comment = require("../models/comment.model");
const Post = require("../models/post.model");

const addNewComment = async (req, res) => {
  const { body, params } = req;
  let newComment = new Comment(body);
  let postQuery;
  newComment.post_id = params.postId;
  const decodedJwt = jwt.decode(req.cookies.usertoken, { complete: true });
  newComment.user_id = decodedJwt.payload.id;
  try {
    newComment = await newComment.save();
    postQuery = await Post.findByIdAndUpdate(
      { _id: params.postId },
      { $push: { comments: newComment._id } },
      { new: true, useFindAndModify: true }
    );
    res.json({ newComment, postQuery });
  } catch (error) {
    res.status(400).json(error);
  }
};
module.exports = {
  addNewComment,
};
