// 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。

//  

// 示例 1：

// 输入：s = "We are happy."
// 输出："We%20are%20happy."


//代码实现：
var replaceSpace = function(s) {
    const len = s.length;
    let ans = '';
    for(let i = 0;i<len;i++) {
        if(s[i]==' '){
            ans+='%20';
        }else{
            ans+=s[i];
        }
    }
    return ans;
};