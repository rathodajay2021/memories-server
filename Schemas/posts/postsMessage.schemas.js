const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: {
    type: String,
  },
  message: {
    type: String,
  },
  creator: {
    type: String,
  },
  tags: {
    type: [String],
  },
  selectedFile: {
    type: String,
  },
  likeCount: {
    type: Number,
    default: 0,
  },
});

const postMessages = mongoose.model("postMessages", postSchema);
module.exports = postMessages;
