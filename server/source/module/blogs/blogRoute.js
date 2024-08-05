const express = require("express");
const router = express.Router();
const blogController = require("./blogController");
const {
  createPostValidation,
  updatePostValidation,
} = require("./blogValidation");
const auth = require("../../middleware/auth");
const validate = require("../../middleware/validate");

router.post(
  "/posts",
  auth,
  validate(createPostValidation),
  blogController.createPost
);
router.get("/posts", blogController.getPosts);
router.get("/posts/:id", blogController.getPost);
router.put(
  "/posts/:id",
  auth,
  validate(updatePostValidation),
  blogController.updatePost
);
router.delete("/posts/:id", auth, blogController.deletePost);

module.exports = router;
