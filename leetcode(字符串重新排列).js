// 给你一个字符串 s 和一个 长度相同 的整数数组 indices 。

// 请你重新排列字符串 s ，其中第 i 个字符需要移动到 indices[i] 指示的位置。

// 返回重新排列后的字符串。

// 输入：s = "codeleet", indices = [4,5,6,7,0,2,1,3]
// 输出："leetcode"
// 解释：如图所示，"codeleet" 重新排列后变为 "leetcode" 。

// 代码实现：
var restoreString = function (s, indices) {
    let res = [];
    for (let i = 0; i < s.length; i++) {
      res[indices[i]] = s[i];
    }
    return res.join("");
  }
