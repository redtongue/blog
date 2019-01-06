---
title: 958.Check Completeness of a Binary Tree
date: 2018-12-19 22:09:19
tags: [code, Tree]
categories: leetcode
---
## Description

Given a binary tree, determine if it is a complete binary tree.

Definition of a complete binary tree from [Wikipedia](http://en.wikipedia.org/wiki/Binary_tree#Types_of_binary_trees):

In a complete binary tree every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

---

给定一个二叉树，确定它是否是一个完全二叉树。

[百度百科](https://baike.baidu.com/item/%E5%AE%8C%E5%85%A8%E4%BA%8C%E5%8F%89%E6%A0%91/7773232?fr=aladdin)中对完全二叉树的定义如下：

若设二叉树的深度为 h，除第 h 层外，其它各层 (1～h-1) 的结点数都达到最大个数，第 h 层所有的结点都连续集中在最左边，这就是完全二叉树。（注：第 h 层可能包含 1~ 2h 个节点。）

题目链接：[https://leetcode.com/problems/check-completeness-of-a-binary-tree/](https://leetcode.com/problems/check-completeness-of-a-binary-tree/ "https://leetcode.com/problems/check-completeness-of-a-binary-tree/")

#### Difficulty: medium

<!-- more -->

### Example 1:

![complete-binary-tree-1](complete-binary-tree-1.png)

	Input: [1,2,3,4,5,6]
	Output: true
	Explanation: Every level before the last is full (ie. levels with node-values {1} and {2, 3}), and all nodes in the last level ({4, 5, 6}) are as far left as possible.

### Example 2:

![complete-binary-tree-2](complete-binary-tree-2.png)

	Input: [1,2,3,4,5,null,7]
	Output: false
	Explanation: The node with value 7 isn't as far left as possible.

### Note:

- The tree will have between 1 and 100 nodes.

## 分析

- updating

## 参考代码

	Definition for a binary tree node.
	class TreeNode:
	    def __init__(self, x):
	        self.val = x
	        self.left = None
	        self.right = None

	class Solution:
    def isCompleteTree(self, root):
        if(root==None):
            return True
        li=[root]
        judge=False
        while(len(li)>0):
            ro=li[0]
            li=li[1:]
            if(ro==None):
                break
            if(judge):
                if(ro.left):
                    return False
            if(ro.left==None):
                judge=True
            li.append(ro.left)
            if(judge):
                if(ro.right):
                    return False
            if(ro.right==None):
                judge=True
            li.append(ro.right)
        return True
        