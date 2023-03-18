function largestFromArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i][0];
    for (let j = 0; j < arr[i].length; j++) {
      let curr = arr[i][j];
      if (curr >= temp) {
        temp = curr;
      }
    }
    result.push(temp);
  }
  return result;
}
console.log(
  largestFromArray([
    [1, 2, 3, 4],
    [5, 6, 7, 9],
    [45, 76, 2, 1],
    [89, 90, 87, 9],
  ])
);
