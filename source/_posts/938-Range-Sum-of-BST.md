---
title: 938.Range Sum of BST(二叉搜索树的范围和)
date: 2018-11-11 12:00:42
tags: [code, Tree]
categories: leetcode
---
## Description

Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R (inclusive).

The binary search tree is guaranteed to have unique values.

---

给定二叉搜索树的根结点 root，返回 L 和 R（含）之间的所有结点的值的和。

二叉搜索树保证具有唯一的值。

题目链接：[https://leetcode.com/problems/range-sum-of-bst/](https://leetcode.com/problems/range-sum-of-bst/ "https://leetcode.com/problems/range-sum-of-bst/")

#### Difficulty: medium

<!-- more -->

### Example 1:

	Input: root = [10,5,15,3,7,null,18], L = 7, R = 15
	Output: 32

### Example 2:

	Input: root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
	Output: 23

### Note:

- The number of nodes in the tree is at most 10000.
- The final answer is guaranteed to be less than 2^31.

## 分析

1. 简单的前序遍历，返回所有满足2条件的节点的值的和；
2. 判断该节点的值是否在L，R之间；
3. 返回节点和。

## 参考代码

	Definition for a binary tree node.
	class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

	class Solution:
    def rangeSumBST(self, root, L, R):
        if(root==None):
            return 0
        left=self.rangeSumBST(root.left, L, R)
        right=self.rangeSumBST(root.right, L, R)
        if(root.val>=L and root.val<=R):
            return left+right+root.val
        else:
            return left+right