ch02_alex_kincer.js
// Alex Kincer
// Chapter 2

// Looping a Triangle
let line = "#";
while (line.length <= 7) {
    console.log(line);
    line = line + "#";
}

// FizzBuzz
for (let n = 1; n <= 100; n+= 1) {
    let output = "";
    if (n % 3 == 0) output += "Fizz";
    else (n % 5 == 0) output += "Buzz";
    console.log(output || n);
  }

// output will change 
// Chessboard
let size = 8;


 (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);

// confused on where to put letboard
// not completely understanding the concepts of += or ++, or if im using them correctly, just guessing based off reading through the chapter