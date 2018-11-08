---
title: 894.All Possible Full Binary Trees
date: 2018-08-27 21:39:50
tags: [code,Tree,Recursion]
categories: leetcode
---
## Description

A full binary tree is a binary tree where each node has exactly 0 or 2 children.

Return a list of all possible full binary trees with N nodes.  Each element of the answer is the root node of one possible tree.

Each node of each tree in the answer must have node.val = 0.

You may return the final list of trees in any order.

题目链接：[https://leetcode.com/problems/all-possible-full-binary-trees/description/](https://leetcode.com/problems/all-possible-full-binary-trees/description/ "https://leetcode.com/problems/all-possible-full-binary-trees/description/")

#### Difficulty: medium

<!-- more -->

### Example 1:

	Input: 7
	Output: [[0,0,0,null,null,0,0,null,null,0,0],[0,0,0,null,null,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,null,null,null,null,0,0],[0,0,0,0,0,null,null,0,0]]
	Explanation:
![Explanation](1.png)

### Note:

- 1 <= N <= 20

## 分析

1. 对任意一个节点只有两个子节点或者0个，那么每个节点的左右子树的节点个数只能为奇数；
2. 依据1，对于每个节点，其左右子树是剩余分成的两份（两份奇数个节点）；
3. 2便是递归的步骤，以此递推。

## 参考代码

    class TreeNode:
    	def __init__(self, x):
        	self.val = x
        	self.left = None
        	self.right = None
	class Solution:
		def allPossibleFBT(self, N):
        	if(N==0):
            	return [None]
        	if(N==1):
            	return [TreeNode(0)]
        	left=[]
        	right=[]
        	root=[]
        	for i in range(1,N-1,2):
            	print(i,N-1-i)
            	left=self.allPossibleFBT(i)
            	right=self.allPossibleFBT(N-1-i)
            	for l in left:
                	for r in right:
                   		ro=TreeNode(0)
                    	ro.left=l
                    	ro.right=r
                    	root.append(ro)
        	return root

	20 / 20 test cases passed.
	Runtime: 284 ms