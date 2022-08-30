# Preorder traversal of a binary tree

[题目链接](https://leetcode.cn/problems/binary-tree-preorder-traversal/)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    var ansArr = []
    if(!root) return ansArr
    hyh(root,ansArr)
    return ansArr
};

var hyh =function(root,ansArr){
    ansArr.push(root.val)
    if(root.left){
        hyh(root.left,ansArr)
    }
    if(root.right){
        hyh(root.right,ansArr)
    }
}
```

