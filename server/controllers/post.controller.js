const Post = require("../models/post.model");
const jwt = require("jsonwebtoken");

const addNewPost = async (req, res) => {
  const { body } = req;
  let newPost = new Post(body);
  const decodedJwt = jwt.decode(req.cookies.usertoken, { complete: true });
  console.log(decodedJwt);
  newPost.user_id = decodedJwt.payload.id;
  console.log(newPost);
  try {
    newPost = await newPost.save();
    res.json(newPost);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getAllPosts = async (req, res) => {
  try {
    const allPosts = await Post.find()
      .populate({
        path: "comments",
        model: "Comment",
        populate: {
          path: "user_id",
          model: "User",
        },
      })
      .exec();
    res.json(allPosts);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  addNewPost,
  getAllPosts,
};
