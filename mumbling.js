/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd");    // "A-Bb-Ccc-Dddd"
accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt");    // "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.

 */

function accum(s) {
  let container = [];

  let arr = s.toLowerCase().split("");

  for (i in arr) {
    container.push(arr[i].toUpperCase());
    for (let k = 0; k < i; k++) {
      container.push(arr[i]);
    }
    container.push("-");
  }
  console.log(container.join("").slice(0, -1));
  return container.join("").slice(0, -1);
}
