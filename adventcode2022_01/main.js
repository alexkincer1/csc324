const fs = require("fs");
const path = require("path");
let targetFile = process.cwd() + "programming";
const input = fs.readFileSync(process.cwd() + "/advent2022_01/input.txt");
const splitLines = str => str.split(/\n/);
let input2 = splitLines(input.toString());
let input3 = input2.map(str => parseInt(str));
console.log(input3);