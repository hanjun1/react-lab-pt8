const Post = require("../../models/Post");

async function create(req, res) {
  let post = await Post.create(req.body);
  res.status(200).json("okay!");
}

module.exports = {
  create,
};
