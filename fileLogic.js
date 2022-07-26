const express = require("express");
const fs = require("fs");

function createFile(filename) {
  if (!fs.existsSync("./data/newFile.txt")) {
    fs.writeFileSync("./data/newFile.txt", "blablabla");
  }
}
function deleteFile(filename) {
  if (!isExist) {
  }
}

function isExist(filename) {
  return fs.existsSync("../data/" + filename);
}
function isValidName(filename = "") {
  return ["/", "\\", "*"].find((cahr) =>
    filename.includes(cahr) ? false : true
  );
}
module.exports = { createFile };
