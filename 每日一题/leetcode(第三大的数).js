//414
var thirdMax = function (nums) {
    const arr = [...new Set(nums)].sort((a, b) => b - a)
    return arr[2] ?? arr[0]
  };