// 给你一个整数 n ，找出从 1 到 n 各个整数的 Fizz Buzz 表示，并用字符串数组 answer（下标从 1 开始）返回结果，其中：

// answer[i] == "FizzBuzz" 如果 i 同时是 3 和 5 的倍数。
// answer[i] == "Fizz" 如果 i 是 3 的倍数。
// answer[i] == "Buzz" 如果 i 是 5 的倍数。
// answer[i] == i （以字符串形式）如果上述条件全不满足。

// 示例 1：

// 输入：n = 3
// 输出：["1","2","Fizz"]
// 示例 2：

// 输入：n = 5
// 输出：["1","2","Fizz","4","Buzz"]

// 代码实现：
var fizzBuzz = function(n) {
    let newArr = [];
    for(let i = 1;i <=n;i++){
        if (i %3===0&& i % 5===0) {
            newArr.push("FizzBuzz");
        }else if(i % 3===0){
            newArr.push("Fizz");
        }else if (i % 5===0) {
            newArr.push("Buzz");
        }else{
            newArr.push(i + "");
        }
    }
    return newArr;
};
