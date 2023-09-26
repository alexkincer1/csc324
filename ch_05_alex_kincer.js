ch_05_alex_kincer.js
// Alex Kincer
// Chapter 5


// Flattening

let arrays = [[1, 2, 3], [4, 5], [6]]
console.log(arrays.redce((flat,current) => flat.concat(current)));

// not sure what is going wrong here.

// WRITE YOUR OWN LOOP

function loop(start, test, update, body) {
      (let value = start; test(value); value = update(value)) 
      body(value);
  }

// says I am spelling value wrong but I have spell checked and I am not, so not sure if thats not why code isn't running or what.

// Everything

function every(array, predicate) {
     (let element of array) {
      if (!predicate(element)) return false;
    }
    return true;
  }

// stuck on what to do next.