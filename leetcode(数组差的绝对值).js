// 给你一个整数数组 nums 和一个整数 k ，请你返回数对 (i, j) 的数目，满足 i < j 且 |nums[i] - nums[j]| == k 。

// |x| 的值定义为：

// 如果 x >= 0 ，那么值为 x 。
// 如果 x < 0 ，那么值为 -x 。
//  

// 代码实现：
var countKDifference = function(nums, k) {
    let res = 0, n = nums.length;
    for (let i = 0; i < n; ++i) {
        for (let j = i + 1; j < n; ++j) {
            if (Math.abs(nums[i] - nums[j]) == k) {
                ++res;
            }
        }
    }
    return res;
};
// JavaScript  Math方法

