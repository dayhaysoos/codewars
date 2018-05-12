/*
Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,

each taken only once - coming from s1 or s2. #Examples: ``` a = "xyaabbbccccdefww" b = "xxxxyyyyabklmopq" longest(a, b) -> "abcdefklmopqwxy"
a = "abcdefghijklmnopqrstuvwxyz" longest(a, a) -> "abcdefghijklmnopqrstuvwxyz" ```

 */

function longest(s1, s2) {
  let container = [];
  s1.split("").forEach(letter => {
    !container.includes(letter) ? container.push(letter) : null;
  });
  s2.split("").forEach(letter => {
    !container.includes(letter) ? container.push(letter) : null;
  });
  return container.sort((a, b) => (a < b ? -1 : 1)).join("");
}
