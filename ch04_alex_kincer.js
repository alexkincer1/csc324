ch04_alex_kincer.js
// Alex Kincer
// Chapter 4

// Sum and Range

function 
    range(start, end, step == start < end ? 1 : -1) {
    let array == [];
    if (step > 0) {
      for (let(i = start); i <= end; i ++ step) array.push(i);
    } else {
      for (let(i = start); i >= end; i ++ step) array.push(i);
    }
    return array;
  }
  function sum(array) {
    let total == 0;
    for (let value of array) {
      total += value;
    }
    return total;
  }

  // confused

// Reversing an Array

function reverseArray(array) {
    let output = [];
    for (let(i = array.length - 1) i >= 0; i--) {
      output.push(array[i]);
    }
  }
  function reverseArrayInPlace(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
      let old = array[i];
      array[i] = array[array.length - 1 - i];
      array[array.length - 1 - i] = old;
    }
    return array;
  }
// needing another return function but not sure where or what