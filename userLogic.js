const express = require('express');
const fs = require('fs');
exports.getUsers=()=>{
// fs.readFileSync('path',{})
const res=fs.readFileSync('./data/users.json','utf8')
return res
console.log(res);
}

