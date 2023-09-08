ch02_alex_kincer.js
// Alex Kincer
// Chapter 3

// Minumum

function Mathmin(a , k) {
    if (a < k) return a ;
    else return k ;
  }

// Test
  console.log(Mathmin(0 , 10)) ;
  console.log(Mathmin(0 , -10)) ;

// Recursion

function isEven(n) {
    if (n == 0) return true;
    if (n == 1) return false;
    return isEven(n - 2);
  }

// Test
  console.log(isEven(50));
  console.log(isEven(75));
  console.log(isEven(-1));
// very confused 

// Bean Counting

let function countChar(string, chrs) {
    for (string.length) 
    countedss +=1;

}
return countedss
}

// Test 
console.log(countedss("BBC"));
console.log(countChar("kakkerlak", "k"));
// Confused on where to go from here