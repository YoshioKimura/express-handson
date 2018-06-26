var router = require("express").Router();

router.get("/", (req, res) => {
  let list = {list:null};
  res.render("./index.ejs",list);
});

module.exports = router;