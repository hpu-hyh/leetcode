//最大连续 1 的个数
// 给定一个二进制数组 nums ， 计算其中最大连续 1 的个数。

// 示例 1：
// 输入：nums = [1,1,0,1,1,1]
// 输出：3
// 解释：开头的两位和最后的三位都是连续 1 ，所以最大连续 1 的个数是 3.

// 示例 2:
// 输入：nums = [1,0,1,1,0,1]
// 输出：2

// 代码实现：
var findMaxConsecutiveOnes = function(nums) {
    const len  = nums.length;
    let maxCount = 0,count = 0;
    for(let i = 0;i<len;i++){
        if(nums[i]==1){//如果存在1，则开始计数，每连续一个1，使得count的值加一。
            count++;
        }else{//如果此时不连续，则比较此时的maxcount和连续值的大小，并将其保存到maxcount里面，初始化count，重新开始计数。
            maxCount = Math.max(maxCount,count);
            count=0;
        }
    }
    maxCount = Math.max(maxCount,count);//当数组遍历完之后，此时maxcount中储存一个数，count中存在一个数，将两者相比较取最大值，即为我们需要的值
    return maxCount;//返回值
};