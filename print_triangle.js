
// console.log("b");
// console.log("b","b"); --> b b <-- THIS IS THE EFFECT I WANT!
// console.log("b","b","b");
// console.log("b","b","b","b");
// console.log("b","b","b","b","b");

// console.log("b" + "b") --> bb <-- OR THIS IS WHAT I WANT ALSO!!

// console.log(["b","b"])--> ["b", "b"]

function printTri (num){
    let index = 0;
    let stars = "*";
    let printout = "";
    while (index<num) {
      console.log(stars);
      stars = stars + " *";
      index++;
    };
  }
  
  printTri(5);