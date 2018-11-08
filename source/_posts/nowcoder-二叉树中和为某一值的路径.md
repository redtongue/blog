---
title: '[nowcoder]二叉树中和为某一值的路径'
date: 2018-07-31 23:06:29
tags: [剑指Offer,code,二叉树]
categories: nowcoder
---

## 题目描述

输入一颗二叉树的跟节点和一个整数，打印出二叉树中结点值的和为输入整数的所有路径。路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。(注意: 在返回值的list中，数组长度大的数组靠前)

题目链接： [https://www.nowcoder.com/practice/b736e784e3e34731af99065031301bca](https://www.nowcoder.com/practice/b736e784e3e34731af99065031301bca "https://www.nowcoder.com/practice/b736e784e3e34731af99065031301bca")

<!-- more -->

## 分析

1. 递归，每一次递归的和为expectNumber-root.val;
2. 终止条件：如果root为空返回空list，如果root为叶结点且值为expectNumber，则返回[root.val];
3. 返回root的值加左右结点返回的list。

## 参考代码

	class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None
	class Solution:
    # 返回二维列表，内部每个列表表示找到的路径
    def FindPath(self, root, expectNumber):
        # write code here
        li=[]
        if(not root):
            return []
        if(root and not root.left and not root.right and root.val==expectNumber):
            return [[root.val]]
        left=self.FindPath(root.left,expectNumber-root.val)
        right=self.FindPath(root.right,expectNumber-root.val)
        for index in left+right:
            li.append([root.val]+index)
        return li

	运行时间： 31ms