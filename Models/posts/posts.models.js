const postMessages = require("../../Schemas/posts/postsMessage.schemas");

class postsModel {
  async getPostsAPI() {
    return await postMessages.find();
  }
}

module.exports = postsModel;
