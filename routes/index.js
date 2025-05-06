var express = require("express");
var router = express.Router();

let messages = [
  {
    user: "Frank",
    message: "First test message",
    time: new Date(),
  },
  {
    user: "John",
    message: "Second test message",
    time: new Date(),
  },
  {
    user: "Gizmo",
    message: "Final Test message",
    time: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { messages: messages });
});

router.get("/new", function (req, res, next) {
  res.render("form");
});

router.post("/new", function (req, res, next) {
  var name = req.body.user;
  var message = req.body.message;
  messages.push({ user: name, message: message, time: new Date() });
  res.redirect("/");
});

module.exports = router;
