---
title: '[nowcoder]二叉树的镜像'
date: 2018-07-29 21:58:05
tags: [剑指Offer,code,二叉树]
categories: nowcoder
---

## 题目描述

操作给定的二叉树，将其变换为源二叉树的镜像。

题目链接： [https://www.nowcoder.com/practice/564f4c26aa584921bc75623e48ca3011](https://www.nowcoder.com/practice/564f4c26aa584921bc75623e48ca3011 "https://www.nowcoder.com/practice/564f4c26aa584921bc75623e48ca3011")

<!-- more -->

## 分析

1. 二叉树镜像，即把每个结点的左右子树互换；
2. 递归最方便，每次递归过程如下：如果当前结点不为空，左右子树互换，左右子结点进入下一轮递归。

## 参考代码

	class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

	class Solution:
    # 返回镜像树的根节点
    def Mirror(self, root):
        # write code here
        if(root):
            index=root.left
            root.left=root.right
            root.right=index
            self.Mirror(root.left)
            self.Mirror(root.right)
        return root

	运行时间： 27ms