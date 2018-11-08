---
title: '[nowcoder]从上往下打印二叉树'
date: 2018-07-31 23:02:24
tags: [剑指Offer,code,二叉树]
categories: nowcoder
---

## 题目描述

从上往下打印出二叉树的每个节点，同层节点从左至右打印。

题目链接： [https://www.nowcoder.com/practice/7fe2212963db4790b57431d9ed259701](https://www.nowcoder.com/practice/7fe2212963db4790b57431d9ed259701 "https://www.nowcoder.com/practice/7fe2212963db4790b57431d9ed259701")

<!-- more -->

## 分析

1. 将根节点压入list，每次取出list第一个TreeNode，将该TreeNode的非空左/右结点压入list；
2. li存储所有压入过list的TreeNode，li即是二叉树的层次遍历序列。

## 参考代码

	class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None
	class Solution:
    # 返回从上到下每个节点值列表，例：[1,2,3]
    def PrintFromTopToBottom(self, root):
        # write code here
        if(not root):
            return []
        lay=[root]
        li=[root.val]
        while(len(lay)):
            ro=lay[0]
            lay=lay[1:]
            if(ro.left):
                li.append(ro.left.val)
                lay.append(ro.left)
            if(ro.right):
                li.append(ro.right.val)
                lay.append(ro.right)
        return li

	运行时间： 21ms