// 给定两个数组 nums1 和 nums2 ，返回 它们的交集 。输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。

// 示例 1：

// 输入：nums1 = [1,2,2,1], nums2 = [2,2]
// 输出：[2]
// 示例 2：

// 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// 输出：[9,4]
// 解释：[4,9] 也是可通过的

// 代码实现：
// 代码思路：先找出来两个数组中较短的数组，以较短的数组为依，去另外一个数组中寻找相同的元素，存在就返回。
var intersection = function(nums1, nums2) {
    var ans = [];//答案数组
    if (nums1.length < nums2.length) {//nums1的元素较少
        for (var i = 0; i < nums1.length; i++) {
            if (nums2.indexOf(nums1[i]) != -1 && ans.indexOf(nums1[i]) == -1) {
                // 如果nums2中存在而且答案数组中不存在，就返回
                ans.push(nums1[i]);
            }
        }
    } else {//nums2的元素较少
        for (var i = 0; i < nums2.length; i++) {
            if (nums1.indexOf(nums2[i]) != -1 && ans.indexOf(nums2[i]) == -1) {
                ans.push(nums2[i]);
            }
        }
    }
    return ans;
};


// 代码实现2：
// 代码思路：ES6提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。
var intersection = function(nums1, nums2) {
    let res = new Set()
    // Set()中自动去重
    for(let s1 of nums1){
        // let of 是set中的遍历数组方法之一
        for(let s2 of nums2){
            if(s1 === s2) res.add(s1)
            //如果相等就添加到答案数组中 
        }
    }
    // ...将数组以逗号隔开的形式返回参数
    return [...res]
};
