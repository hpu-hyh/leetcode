// 实现一个算法，确定一个字符串 s 的所有字符是否全都不同。

// 示例 1：

// 输入: s = "leetcode"
// 输出: false 
// 示例 2：

// 输入: s = "abc"
// 输出: true


// 代码实现：
/**
 * @param {string} astr
 * @return {boolean}
 */
 var isUnique = function(astr) {
    const len = astr.length;
    for(var i = 0;i<len ;i++){
        if(astr.indexOf(astr[i]) !== astr.lastIndexOf(astr[i])){
            return false;
        }
    }
      return true;
};
