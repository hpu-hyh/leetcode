// 给定一个包含 [0, n] 中 n 个数的数组 nums ，找出 [0, n] 这个范围内没有出现在数组中的那个数。

//  

// 示例 1：

// 输入：nums = [3,0,1]
// 输出：2
// 解释：n = 3，因为有 3 个数字，所以所有的数字都在范围 [0,3] 内。2 是丢失的数字，因为它没有出现在 nums 中。
// 示例 2：

// 输入：nums = [0,1]
// 输出：2
// 解释：n = 2，因为有 2 个数字，所以所有的数字都在范围 [0,2] 内。2 是丢失的数字，因为它没有出现在 nums 中。


//代码实现：
var missingNumber = function(nums) {
    nums.sort((a, b) => a - b);//升序排列
    const len = nums.length;
    for (let i = 0;i<len;i++){
        if(nums[i] !== i){
            return i;
        }
    }
    // 如果0~len-1都没有缺失，则缺失的元素就是len本身
    return len;
};