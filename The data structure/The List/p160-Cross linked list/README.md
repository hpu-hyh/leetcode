# p160-相交链表



[题目链接](https://leetcode.cn/problems/intersection-of-two-linked-lists/submissions/)

```js
var getIntersectionNode = function (headA, headB) {
    if (!headA || !headB) return null
    let mapA = new Map();
    while (headA) {
        mapA.set(headA, headA.val);
        headA = headA.next;
    }
    while (headB) {
        if (mapA.has(headB)) return headB
        headB = headB.next;
    }
    return null
};
```

解题思路：创建一个hash表，将其中一个链表遍历进这个hash表，再对另一个链表进行遍历，如果hash表中存有重复的元素，该元素就是相交元素，如果两个链表任意一个为空，返回null，未找到相交元素，返回null