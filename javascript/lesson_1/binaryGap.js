function solution(N) {
  var bin = N.toString(2);
  var zeros = bin.match(new RegExp("0+(?=1)", "g"));
  return ( ( zeros == null ) ? '' : zeros.reduce(function (a, b) { return a.length > b.length ? a : b; }) ).length;
}
