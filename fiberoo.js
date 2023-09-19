
function fib() {
  var fibArray = [0, 1];
  for (let i = 2; i < 50; i++) {
    fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
  }
  return fibArray;
}

console.log(fib());

function numsToString (numbers) {
  return _.map(numbers, function (num) { return `${num}`; });
}

console.log(numsToString(fib()));

function numEvenNums (numbers) {
  return _.filter(numbers, function (num) {return num % 2 ===0;}).length;

}
console.log(numEvenNums(fib()));
























