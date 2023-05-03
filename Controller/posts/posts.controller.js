const APIModel = new (require("../../Models/posts/posts.models"))();

class postsController {
  async getPosts(req, res) {
    try {
      const response = await APIModel.getPostsAPI();

      if (response) res.handler.success(response);
    } catch (error) {
      console.log(
        "🚀 ~ file: posts.controller.js:8 ~ postsController ~ getPosts ~ error:",
        error
      );
      res.handler.serverError();
    }
  }

  async createPosts(req, res) {
    try {
    } catch (error) {}
  }
}

module.exports = postsController;
