# 21-合并两个有序链表

[题目链接](https://leetcode.cn/problems/merge-two-sorted-lists/)

假设有这样两个链表：

![](https://assets.leetcode.com/uploads/2020/10/03/merge_ex1.jpg)

`由于是有序列表，所以我们可以每次取出两个链表的节点进行比较，并按照顺序将节点连接起来，当其中一个链表结束时，如果另外一个链表没有结束，将这个链表剩余部分链接到已经排列好的链表之后即可`

```js
var mergeTwoLists = function (list1, list2) {
  let l1 = list1,
      l2 = list2
  let hair = new ListNode(-1),//虚拟头节点
      p = hair

  while (l1 && l2) {//当两个链表都没结束时
    if (l1.val >= l2.val) {//谁的值小，谁排在前面
      p.next = l2
      l2 = l2.next
    } else {
      p.next = l1
      l1 = l1.next
    }
    p = p.next//将虚拟头节点向后推进一步
  }
  //退出循环说明两个链表有一个或者两个已经结束，判断那一个链表没有结束，并将其连接在xin'lian
  if (l1) p.next = l1
  if (l2) p.next = l2

  return hair.next
};
```

