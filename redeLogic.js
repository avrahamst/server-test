const express = require('express');
const fs = require('fs');
exports.createFile=()=>{
    if(!fs.existsSync('./data/newFile.txt')){
    fs.writeFileSync('./data/newFile.txt',"blablabla")}
    
}