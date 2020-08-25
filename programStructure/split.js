function solution(str) {
  var result = [];

  if (str.length % 2 !== 0) {
    str += "_";
  }

  for (i = 0; i < str.length; i += 2) {
    result.push(str.slice(i, i + 2));
  }

  return result;
}

console.log(solution("abc"));
