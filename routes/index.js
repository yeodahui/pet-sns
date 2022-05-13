var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  res.render("index", {postList: []});
  // render로 index.ejs 보여줄거고 postList를 게시글에 대한 내용 보여줄거임
});

module.exports = router;
