const Post = require("../../model/blog");
const appError = require("../../utils/appError");

const createPost = async (request) => {
  return await Post.create({ ...request.body, author: request.user.id });
};

const getPosts = async () => {
  return await Post.find().populate("author", "name email");
};

const getPost = async (request) => {
  return await Post.findById(request.params.id).populate(
    "author",
    "name email"
  );
};

const updatePost = async (request) => {
  try {
    console.log(request.body);
    const post = await Post.findOne({
      _id: request.params.id,
      author: request.user.id,
    });
    if (!post) throw new appError(404, "Post not found or not authorized");

    return await Post.findByIdAndUpdate(
      request.params.id,
      { ...request.body },
      {
        new: true,
      }
    );
  } catch (error) {
    console.log("error---", error);
    throw new appError(error.status, error.message);
  }
};

const deletePost = async (request) => {
  const post = await Post.findOne({
    _id: request.params.id,
    author: request.user.id,
  });
  if (!post) throw new Error("Post not found or not authorized");
  return await Post.findByIdAndDelete(request.params.id);
};

module.exports = {
  createPost,
  getPosts,
  getPost,
  updatePost,
  deletePost,
};
