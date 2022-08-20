# 141-环形链表

[题目链接](https://leetcode.cn/problems/linked-list-cycle/)

## 1.快慢指针

```js
 var hasCycle = function(head) {
    let slow = head
    let fast = head
    while(fast && slow &&fast.next){
        slow = slow.next
        fast = fast.next.next
        if(fast == slow) return true
	}
     return false
 };
```

定义两个指针，fast比slow指针快，slow指针每次移动一步，fast指针每次移动两部，因此如果链表中有环则fast指针会比slow指针率先走完一圈，且两者在途中会相遇，若相遇，即`fast == slow`，说明链表中有环。

## 2.哈希表

- Set
  - 成员唯一、无序且不重复。
  - [value, value]，键值与键名是一致的（或者说只有键值，没有键名）。
  - 可以遍历，方法有：add、delete、has。
- Map
  - 本质上是键值对的集合，类似集合。
  - 可以遍历，方法很多可以跟各种数据格式转换。

可以用ES6新增的两个数据结构来模拟hash表

```js
var hasCycle = function(head) {
    let hyhArr = new Set()
    while(  head != null){
        if(hyhArr.has(head)){
            return true
        } else{
            hyhArr.add(head)
        }
        head =head.next
    }
    return false
};
```

```js
var hasCycle = function(head) {
    let hyhArr = new Map()
    while(  head != null){
        if(hyhArr.has(head)){
            return true
        } else{
            hyhArr.set(head)
        }
        head =head.next
    }
    return false
};
```

两者差别不大，思想是模拟一个空间。刚开始空间储存为空，对链表进行遍历，如果hash中没有这个值，就将其储存进去，如果有则说明遇到了环，返回true

`leetcode会把数组转换成链表，链表结点是一个一个的对象，即使值相等，但存储在变量中的地址是不同的，所以不会出现由于相同元素而导致判断失误的现象`