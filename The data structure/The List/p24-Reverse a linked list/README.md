# 反转链表





```js
var reverseList = function(head) {
    let arrAns = null
    let arrHead = head
    while (arrHead) {
        // [arrHead.next, arrAns,arrHead] = [arrAns, arrHead,arrHead.next]
       var temp = arrHead.next
        arrHead.next = arrAns
        arrAns = arrHead
        arrHead = temp
    }
    return arrAns
};
```

