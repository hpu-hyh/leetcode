var maxProductDifference = function (nums) {
    let temp = nums.sort((a, b) => a - b)
    return temp[temp.length - 1] * temp[temp.length - 2] - temp[0] * temp[1]
};