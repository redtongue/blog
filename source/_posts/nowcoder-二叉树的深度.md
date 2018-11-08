---
title: '[nowcoder]二叉树的深度'
date: 2018-08-02 17:42:51
tags: [剑指Offer,code,二叉树]
categories: nowcoder
---

## 题目描述

输入一棵二叉树，求该树的深度。从根结点到叶结点依次经过的结点（含根、叶结点）形成树的一条路径，最长路径的长度为树的深度。

题目链接： [https://www.nowcoder.com/practice/435fb86331474282a3499955f0a41e8b](https://www.nowcoder.com/practice/435fb86331474282a3499955f0a41e8b "https://www.nowcoder.com/practice/435fb86331474282a3499955f0a41e8b")

<!-- more -->

## 分析

1. 递归：如果当前结点为空，返回0，否则返回左右子树最大深度+1.

## 参考代码

	class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None
	
	class Solution:
    def TreeDepth(self, pRoot):
        # write code here
        if(not pRoot):
            return 0
        left=self.TreeDepth(pRoot.left)
        right=self.TreeDepth(pRoot.right)
        return max(left,right)+1

	运行时间： 20 ms