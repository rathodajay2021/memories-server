const express = require("express");

const router = express.Router();
const controller = new (require('../../Controller/posts/posts.controller'))()

router.get('/', controller.getPosts)
router.post('/', controller.createPosts)

module.exports = router;