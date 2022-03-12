// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

// 请必须使用时间复杂度为 O(log n) 的算法。

//  

// 示例 1:

// 输入: nums = [1,3,5,6], target = 5
// 输出: 2
// 示例 2:

// 输入: nums = [1,3,5,6], target = 2
// 输出: 1


// 代码实现：
// 1
var searchInsert = function (nums, target) {
    let result = nums.indexOf(target)
    if (result === -1) {
        for (let index in nums) {
            if (nums[index] > target) return index
            if(nums[nums.length-1] < target) return nums.length
        }
    } else {
        return result
    }
};

// 2


 var searchInsert = function(nums, target) {
    for(var i = 0; i < nums.length; i++) {
        if(nums[i] === target) return i
    }

    if(nums[0] > target) nums.unshift(target)
    if(nums[nums.length-1] < target) nums.push(target)
    for(var i = 0; i < nums.length; i++) {
        if(nums[i]>=target) return i
    }     
};
