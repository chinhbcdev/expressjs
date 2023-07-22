var express = require("express");
var router = express.Router();
var accountModel = require("../models/account");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express1" });
});

router.post("/", function (req, res, next) {
  console.log(req.body);
  // console.log("\n" + accountModel.f);
  accountModel
    .findOne({
      username: req.body.username,
    })
    .then((data) => {
      if (data) res.json("Tai khoan ton tai");
      else {
        console.log("19");
        return accountModel.create({
          username: req.body.username,
          password: req.body.password,
        });
      }
    })
    .then((data) => {
      res.json("Tao tai khoan thanh cong"); // khong co dau { bi loi}
    })
    .catch((err) => {
      res.status(500).json(err + "That bai 27");
    });
  // res.render("index", { title: "Express1" + req.body.username });
});

router.post("/login", (req, res, next) => {
  let username = req.body.username;
  let password = req.body.password;
  accountModel
    .findOne({
      username: username,
      password: password,
    })
    .then((data) => {
      if (data) res.json("Login success");
      else res.status(400).json("Wrong username");
    })
    .catch((err) => res.json("Err"));
});
module.exports = router;
