//Task_1
// (() => {
//   let a = prompt("Enter first number", 1) // what is 1?
//   let b = prompt("Enter second number", 8)
//   if (a > b) console.log(1)
//   else if (b > a) console.log(-1)
//   else return console.log(0)
// })();


//Task_2
// (() => {
//   let a = prompt("Enter number")
//   let res = 1;
//   let odinisa = 1;
//   while (res < a) {
//     //pofig testim
//     //++ 
//     res++
//     odinisa *= res
//   }
//   console.log(odinisa);
// })();

//Task_3
// (() => {
//   let a = prompt("Enter number1:")
//   let b = prompt("Enter number2:")
//   let c = prompt("Enter number3:")

//   let whole = `${a}${b}${c}`;
//   let whole2 = a + b + c;
//   console.log(whole);
//   console.log(whole2);
//   alert("OLErt");
//   let numeric1 = parseInt(prompt("Enter number1:"))
//   let numeric2 = parseInt(prompt("Enter number2:"))
//   let numeric3 = parseInt(prompt("Enter number3:"))

//   let numeric_whole = 100 * numeric1 + 10 * numeric2 + numeric3;
//   console.log(numeric_whole);

// })();

//Task_4
// (() => {
//   let a = parseInt(prompt("Enter SIDE1:"));
//   let b = prompt("Enter SIDE2:");

//   if (isNaN(a) || a <= 0) {
//     alert("Invalid input for SIDE1.");
//     return;
//   }

//   if (b !== null && b !== "") {
//     b = parseInt(b);
//     if (isNaN(b) || b <= 0) {
//       alert("Invalid input for SIDE2.");
//       return;
//     }
//   } else {
//     b = undefined;
//   }

//   let wholeArea = (x, y) => (typeof y === "undefined" ? x * x : x * y);

//   alert("OLErt: " + wholeArea(a, b));
// })();


//Task_5
function isPerfectNumber(number) {
  let sumOfDivisors = 0;
  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
      sumOfDivisors += i;
    }
  }
  return sumOfDivisors === number;
}

// // Приклад використання:
// const myNumber = parseInt(prompt("Enter number: "));
// if (isPerfectNumber(myNumber)) {
//   console.log(`${myNumber} - це досконале число!`);
// } else {
//   console.log(`${myNumber} - не є досконалим числом.`);
// }


//Task_6
// let min = parseInt(prompt("Enter min number:"))
// let max = parseInt(prompt("Enter max number:"))

// for (let index = min; index < max; index++) {//вот він
//   if (isPerfectNumber(index)) {
//     console.log(index)
//     alert(`Olert: ${index}`)
//   }
// }

//Task_7

// let hours = parseInt(prompt("Enter hours:"))
// let minutes = parseInt(prompt("Enter minutes:"))
// let seconds = parseInt(prompt("Enter seconds:"))

// let enteredTime = (h, m, s) => {
//   // let res = ""
//   if (h > 0 && h < 24) {
//     document.writeln(h + ":")
//   } else {
//     document.writeln("00:")
//   }
//   if (m > 0 && m < 60) {
//     document.writeln(m + ":")
//   } else {
//     document.writeln("00:")
//   }
//   if (s > 0 && s < 60) {
//     document.writeln(s)
//   } else {
//     document.writeln("00")
//   }
// }
// enteredTime(hours, minutes, seconds)

//Task_8
// let _hours = parseInt(prompt("Enter hours:"))
// let _minutes = parseInt(prompt("Enter minutes:"))
// let _seconds = parseInt(prompt("Enter seconds:"))

// let enteredSpecificTime = (h, m, s) => {
//   if (h > 0 && h < 24 && m > 0 && m < 60 && s > 0 && s < 60) {
//     document.writeln(s + (m * 60) + (h * 3600));
//   } else {
//     document.writeln("Format Error")
//   }
// }
// enteredSpecificTime(_hours, _minutes, _seconds)

//Task_9

// let enteredTimetoSeconds = (s) => {
//   if (!isNaN(s)){
//     document.write(Math.trunc(s / 3600) + ":" + Math.trunc((s % 3600) / 60) + ":" + Math.trunc((s % 3600) % 60 ))
//   }
//   else{
//     document.write("Format error. Try again")
//   }
// }

// let seconds = parseInt(prompt("Enter seconds"))

// enteredTimetoSeconds(seconds)

//Task_10

let enteredTimetoSeconds = (fH, fM, fS, sH, sM, sS) => {
  if (!isNaN(fH) && !isNaN(fM) && !isNaN(fS) && !isNaN(sH) && !isNaN(sM) && !isNaN(sS)) {
    let Time = fS + (fM * 60) + (fH * 3600) - sS + (sM * 60) + (sH * 3600)

    if (Time != 0) {
      Time = Math.abs(Time)
      document.write(Math.trunc(Time / 3600) + ":" + Math.trunc((Time % 3600) / 60) + ":" + Math.trunc((Time % 3600) % 60) + " - difference")
    }
    else {
      document.write("There is no difference between the two dates, they are the same")
    }
  }
  else {
    document.write("Format error. Try again")
  }
}

let fHour = parseInt(prompt("Enter Hour №1"))
let fMinutes = parseInt(prompt("Enter Minutes №1"))
let fSeconds = parseInt(prompt("Enter Seconds №1"))

let sHour = parseInt(prompt("Enter Hour №2"))
let sMinutes = parseInt(prompt("Enter Minutes №2"))
let sSeconds = parseInt(prompt("Enter Seconds №2"))

enteredTimetoSeconds(fHour, fMinutes, fSeconds, sHour, sMinutes, sSeconds)