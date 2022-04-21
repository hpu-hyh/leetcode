// 给你一个整数数组 nums 和一个整数 k ，判断数组中是否存在两个 不同的索引 i 和 j ，满足 nums[i] == nums[j] 且 abs(i - j) <= k 。如果存在，返回 true ；否则，返回 false 。

//  

// 示例 1：

// 输入：nums = [1,2,3,1], k = 3
// 输出：true
// 示例 2：

// 输入：nums = [1,0,1,1], k = 1
// 输出：true
// 示例 3：

// 输入：nums = [1,2,3,1,2,3], k = 2
// 输出：false


//Map  hash表解决问题
var containsNearbyDuplicate = function (nums, k) {
    const ma = new Map();//实例化一个空的Map
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (ma.has(num) && i - ma.get(num) <= k) {//第二次出现，此时i一定比第一次索引大，不用取绝对数值    ma.get(num)得到的是num此时对应的值
            return true
        }
        ma.set(nums[i],i);//如果Map中不含有某个元素，就给该元素设置相应的键值
    }
    return false
};
