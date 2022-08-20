let arr = [
  0, 1, 1, 1, 4, 5, 3, 7, 7, 8, 10, 2, 7, 8, 0, 5, 2, 16, 12, 1, 19, 15, 5, 18,
  2, 2, 22, 15, 8, 22, 17, 6, 22, 6, 22, 26, 32, 8, 10, 11, 2, 26, 9, 12, 9, 7,
  28, 33, 20, 7, 2, 17, 44, 3, 52, 27, 2, 23, 19, 56, 56, 58, 36, 31, 1, 19, 19,
  6, 65, 49, 27, 63, 29, 1, 69, 47, 56, 61, 40, 43, 10, 71, 60, 66, 42, 44, 10,
  12, 83, 69, 73, 2, 65, 93, 92, 47, 35, 39, 13, 75,
];
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  var arr1 = [],
    arr2 = [];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < arr[0]) {
      arr1.push(arr[i]);
    } else {
      arr2.push(arr[i]);
    }
  }
  arr1 = quickSort(arr1);
  arr2 = quickSort(arr2);
  arr1.push(arr[0]);
  return [...arr1, ...arr2];
}
console.log(quickSort(arr));
