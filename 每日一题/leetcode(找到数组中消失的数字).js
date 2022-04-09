// 给你一个含 n 个整数的数组 nums ，其中 nums[i] 在区间 [1, n] 内。请你找出所有在 [1, n] 范围内但没有出现在 nums 中的数字，并以数组的形式返回结果。

// 示例 1：

// 输入：nums = [4,3,2,7,8,2,3,1]
// 输出：[5,6]


//代码实现：
var findDisappearedNumbers = function(nums) {
    const len = nums.length;
    let arr = [];
    for(var i =1;i<=len;i++){
       if(nums.includes(i) == false)
       arr.push(i);
    }
    return arr;
};

// 定义：

// includes()方法用来判断一个数组是否包含一个指定的值，如果是则返回true,否则false.

// 语法：

// arr.includes(searchElement)
// arr.includes(searchElement, fromIndex)复制代码
// 参数说明：

// searchElement  必须参数。需要查找的元素值

// fromIndex  可选参数。从该索引处开始查找searchElement。如果为负值，则按升序从array.length + fromIndex 的索引开始搜索，默认为0.