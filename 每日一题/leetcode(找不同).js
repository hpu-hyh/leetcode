// 给定两个字符串 s 和 t ，它们只包含小写字母。

// 字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。

// 请找出在 t 中被添加的字母。

// 示例 1：
// 输入：s = "abcd", t = "abcde"
// 输出："e"
// 解释：'e' 是那个被添加的字母。

// 示例 2：
// 输入：s = "", t = "y"
// 输出："y"

//代码实现：
//从长的字符串中寻找端的字符串元素，含有就删除，最后剩下的的就是结果
var findTheDifference = function(s, t) {
    let ss = s.split("");
    let tt = t.split("");
    for (let i = 0; i < ss.length; i++) {
        let maxIndex = tt.indexOf(ss[i])
        if (maxIndex != -1) {
            tt.splice(maxIndex, 1)
        }
  }
  let x = tt.join("");
  return x
};
