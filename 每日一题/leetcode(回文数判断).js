// 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。

// 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

// 例如，121 是回文，而 123 不是。
//  

// 示例 1：

// 输入：x = 121
// 输出：true
// 示例 2：

// 输入：x = -121
// 输出：false
// 解释：从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。


// 编程实现：
/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    var p = x;
    if(x<0){return false;}
    else if(x === 0){return true;}
    else{
                var s = 0;
        while(x !== 0){
            s = s*10 + (x%10);
            // | 的作用是是两边的数字转换城二进制后的和
            x = x/10 | 0 ;  
        }
    }
    // ===的作用是判断等号两边的变量是否全等，返回值为布朗值
    return s === p;
};


// 双指针解决（易于理解）
var isPalindrome = function(x) {
    var p = x;
    if(x<0){return false;}
    else if(x === 0){return true;}
    
    str = String(x)
    for(var i = 0, j = str.length-1; i < j; ) {
        if(str[i] !== str[j]) return false
        i++
        j--
    }

    return true
};
