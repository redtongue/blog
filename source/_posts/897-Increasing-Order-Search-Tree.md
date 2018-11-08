---
title: 897.Increasing Order Search Tree
date: 2018-09-02 11:34:37
tags: [code,Depth-first Search,Binary Search Tree]
categories: leetcode
---
## Description

Given a tree, rearrange the tree in in-order so that the leftmost node in the tree is now the root of the tree, and every node has no left child and only 1 right child.

题目链接：[https://leetcode.com/problems/increasing-order-search-tree/description/](https://leetcode.com/problems/increasing-order-search-tree/description/ "https://leetcode.com/problems/increasing-order-search-tree/description/")

#### Difficulty: easy

<!-- more -->

### Example 1:

	Input: [5,3,6,2,4,null,8,1,null,null,null,7,9]
	
	      5
	     / \
	    3   6
	   / \   \
	  2   4   8
	 /       / \
	1       7   9
	Output: [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]
	
	 1
	  \
	   2
	    \
	     3
	      \
	       4
	        \
	         5
	          \
	           6
	            \
	             7
	              \
	               8
	                \
	                 9

### Note:

- The number of nodes in the given tree will be between 1 and 100.
- Each node will have a unique integer value from 0 to 1000.

## 分析

1. 题意：将二叉搜索树变为只有右结点的二叉搜索树；
2. 遍历得到原二叉搜索树的中序遍历序列；
3. 根据中序遍历序列，遍历构建只有右结点的二叉搜索树，返回根结点；
4. 做到第二题的时候精神有点恍惚，感觉自己的代码不够pythonic。

## 参考代码

	Definition for a binary tree node.
	class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

	class Solution:
    def increasingBST(self, root):
        def _inter(ro):
            if(ro==None):
                return None
            left=[]
            if(ro.left!=None):
                left=_inter(ro.left)
            right=[]
            if(ro.right!=None):
                right=_inter(ro.right)
            return left + [ro.val] + right
        li=_inter(root)
        if(len(li) ==0 ):
            return None
        head=TreeNode(li[0])
        p=head
        for i in range(1,len(li)):
            q=TreeNode(li[i])
            p.right=q
            p=q
        return head
		
	2156 / 2156 test cases passed.
	Runtime: 160 ms