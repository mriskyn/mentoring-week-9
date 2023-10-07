const { authentication } = require("../middleware/auth");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("get movies");
});
router.post("/", (req, res) => {
  res.send("create movie");
});
router.get("/:id", (req, res) => {
  res.send("get movie");
});
router.put("/:id", authentication, (req, res) => {
  res.send("update movie");
});
router.delete("/:id", authentication, (req, res) => {
  res.send("delete movie");
});

module.exports = router;
