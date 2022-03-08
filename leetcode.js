// 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数在数组的前半部分，所有偶数在数组的后半部分。

// 实例：
// 输入：nums = [1,2,3,4]
// 输出：[1,3,2,4] 
// 注：[3,1,2,4] 也是正确的答案之一。


/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var exchange = function(nums) {
    var arr1 = []
    var arr2 = []
    for(var i = 0; i < nums.length; i++) {
        if(nums[i] % 2) {
            arr1.push(nums[i])
        } else {
            arr2.push(nums[i])
        }
    }
    return [...arr1, ...arr2]
};