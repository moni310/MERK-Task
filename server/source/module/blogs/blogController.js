const appError = require("../../utils/appError");
const blogService = require("./blogService");
const createResponse = require("../../utils/response");

const createPost = async (request, response) => {
  try {
    const data = await blogService.createPost(request);

    if (!data) {
      throw new appError(409, "unable to create post. please try again");
    }
    createResponse(response, 200, "post successfully created", data);
  } catch (error) {
    createResponse(response, error.status, error.message);
  }
};
const getPost = async (request, response) => {
  try {
    const data = await blogService.getPost(request);

    if (!data) {
      throw new appError(409, "unable to get post. please try again");
    }
    createResponse(response, 200, "post successfully fetched", data);
  } catch (error) {
    createResponse(response, error.status, error.message);
  }
};
const getPosts = async (request, response) => {
  try {
    const data = await blogService.getPosts(request);

    if (!data) {
      throw new appError(409, "unable to get posts. please try again");
    }
    createResponse(response, 200, "posts successfully fetched", data);
  } catch (error) {
    createResponse(response, error.status, error.message);
  }
};
const updatePost = async (request, response) => {
  try {
    const data = await blogService.updatePost(request);

    if (!data) {
      throw new appError(409, "unable to update post. please try again");
    }
    createResponse(response, 200, "post successfully updated", data);
  } catch (error) {
    createResponse(response, error.status, error.message);
  }
};
const deletePost = async (request, response) => {
  try {
    const data = await blogService.deletePost(request);

    if (!data) {
      throw new appError(409, "unable to delete post. please try again");
    }
    createResponse(response, 200, "post successfully deleted", data);
  } catch (error) {
    createResponse(response, error.status, error.message);
  }
};

module.exports = {
  createPost,
  getPost,
  getPosts,
  updatePost,
  deletePost,
};
