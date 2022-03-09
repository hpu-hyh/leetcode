<script>
// 给你一个整数数组nums除某个元素仅出现一次外，其余每个元素都恰出现三次,请你找出并返回那个只出现了一次的元素
// 示例
// 输入:nums = [2,2,3,2]
// 输出:3
//

// 代码实现
var singleNumber = function(nums) {
    for(var i = 0; i < nums.length; i++) {
        if(nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])) return nums[i]
    }
};
//indexOf() 和 lastIndexOf() 的用法是分别找到该元素第一次出现和最后一次出现的位置
//代码思想：
    // 如果数组内一个元素的第一次出现的最后一次出现的位置相同，说明该元素只出现了一次。
</script>