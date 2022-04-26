// 给定一个非负整数数组 A，返回一个数组，在该数组中， A 的所有偶数元素之后跟着所有奇数元素。

// 你可以返回满足此条件的任何数组作为答案。

// 示例：
// 输入：[3,1,2,4]
// 输出：[2,4,3,1]
// 输出 [4,2,3,1]，[2,4,1,3] 和 [4,2,1,3] 也会被接受。

// 代码实现：
var sortArrayByParity = function(nums) {
    let arr1 = [];
    let arr2 = [];
    const len = nums.length;
    for(var i = 0;i<len;i++){
        if(nums[i] % 2 == 0){
            arr1.push(nums[i]);
        }else{
            arr2.push(nums[i]);
        }
    }
    return [...arr1,...arr2]
};
