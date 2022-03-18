// 给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中 最后一个 单词的长度。
// 单词 是指仅由字母组成、不包含任何空格字符的最大子字符串。

// 示例 1：
// 输入：s = "Hello World"
// 输出：5
// 解释：最后一个单词是“World”，长度为5。

// 示例 2：
// 输入：s = "   fly me   to   the moon  "
// 输出：4
// 解释：最后一个单词是“moon”，长度为4。



// 代码实现：
var lengthOfLastWord = function(s) {
    let index = s.length - 1;
    while (s[index] === ' ') {
        index--;
    }
    // 第一次while循环跳过字符串末尾的空格
    let wordLength = 0;
    // 第二次while循环检索有效字符长度，当遇到空格时，循环结束。
    while (index >= 0 && s[index] !== ' ') {
        wordLength++;
        index--;
    }
    return wordLength;
};