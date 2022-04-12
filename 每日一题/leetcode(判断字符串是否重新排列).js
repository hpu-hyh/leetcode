// 给定两个字符串 s1 和 s2，请编写一个程序，确定其中一个字符串的字符重新排列后，能否变成另一个字符串。

// 示例 1：
// 输入: s1 = "abc", s2 = "bca"
// 输出: true

// 示例 2：
// 输入: s1 = "abc", s2 = "bad"
// 输出: false

//代码实现：

// 错在类似于‘abb’ ‘aab’这种数组，判断结果为true
// var CheckPermutation = function(s1, s2) {
//     const len1 = s1.length;
//     const len2 = s2.length;
//     if(len1!==len2){
//         return false;
//     }
//     let m = new Set([...s1]);
//     for(let i = 0;i<len2;i++){
//         if(!m.has(s2[i])){
//             return false;
//         }
//     }
//     return true;
// };

//还是官方牛逼
var CheckPermutation = function(s1, s2) {
    return s1.length == s2.length && [...s1].sort().join('') === [...s2].sort().join('')
};