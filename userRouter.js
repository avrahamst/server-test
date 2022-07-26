const express = require("express"),
  router = express.Router();

const userLogic = require("./userLogic.js");

const fileLogic = require("./fileLogic.js");

router.get("/users", async (req, res) => {
  try {
    fileLogic.createFile();
    res.send(await userLogic.getUsers());
  } catch (err) {
    console.log("err");
  }
});
router.post("/create", async (req, res) => {
  try {
    fileLogic.createFile(req.file);
    res.send("create text file");
  } catch (err) {
    console.log("err");
  }
});

module.exports = router;
