const express = require("express"),
  app = express();
const multer = require("multer"),
  upload = multer({ dest: "/upload" });
app.use(express.json());
app.use("/", require("./userRouter"));

app.listen(process.env.PORT || 3500, () => {
  console.log("server up: port 3500");
});
