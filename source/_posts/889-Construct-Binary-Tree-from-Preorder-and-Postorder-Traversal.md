---
title: 889.Construct Binary Tree from Preorder and Postorder Traversal
date: 2018-08-20 22:38:18
tags: [code,Tree]
categories: leetcode
---
## Description

Return any binary tree that matches the given preorder and postorder traversals.

Values in the traversals pre and post are distinct positive integers.

题目链接：[https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/description/](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/description/ "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/description/")

#### Difficulty: medium

<!-- more -->

### Example 1:

	Input: pre = [1,2,4,5,3,6,7], post = [4,5,2,6,7,3,1]

	Output: [1,2,3,4,5,6,7]

### Note:

- 1 <= pre.length == post.length <= 30
- pre[] and post[] are both permutations of 1, 2, ..., pre.length.
- It is guaranteed an answer exists. If there exists multiple answers, you can return any of them.

## 分析

1. 根据先序遍历pre和后续遍历post构建二叉树，常规递归方法；
2. 递归的结束条件是：pre长度为0返回None，长度为1，返回TreeNode(pre[0])
3. pre[0]作为当前过程的根节点，pre[1:indexof(pre[1])+2]作为左子树先序，post[:indexof(pre[1])+1]作为左子树后序，pre[indexof(pre[1])+2:]作为右子树先序，post[indexof(pre[1])+1：-1]作为右子树后序；
4. 如例：{[2,4,5],[4,5,2]}为左子树，{[3，6，7],[6,7,3]}为右子树，indexof(pre[1])为pre[1] (2)在post中的位置，为：2
5. 以此类推

## 参考代码
	
	#Definition for a binary tree node.
	class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

	class Solution:
    def constructFromPrePost(self, pre, post):
        if(len(pre)==0):
            return None
        if(len(pre)==1):
            return TreeNode(pre[0])
        head=TreeNode(pre[0])
        index=post.index(pre[1])
        left=self.constructFromPrePost(pre[1:2+index], post[:index+1])
        right=self.constructFromPrePost(pre[2+index:], post[index+1:-1])
        head.left=left
        head.right=right
        return head

	306 / 306 test cases passed.
	Runtime: 56 ms
        
