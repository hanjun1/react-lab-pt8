const Blog = require("../../models/Blog");

async function index(req, res) {
  let blogs = await Blog.find({});
  res.json(blogs);
}

async function create(req, res) {
  let blog = await Blog.create(req.body);
  res.status(200).json("okay!");
}

module.exports = {
  index,
  create,
};
