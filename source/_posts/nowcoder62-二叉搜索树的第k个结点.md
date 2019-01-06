---
title: '[nowcoder62]二叉搜索树的第k个结点'
date: 2018-09-22 11:59:26
tags: [剑指Offer,code,二叉树]
categories: nowcoder
---

## 题目描述

给定一棵二叉搜索树，请找出其中的第k小的结点。例如， （5，3，7，2，4，6，8）    中，按结点数值大小顺序第三小结点的值为4。

题目链接： [https://www.nowcoder.com/practice/ef068f602dde4d28aab2b210e859150a](https://www.nowcoder.com/practice/ef068f602dde4d28aab2b210e859150a "https://www.nowcoder.com/practice/ef068f602dde4d28aab2b210e859150a")

<!-- more -->

## 分析

1. 


## 参考代码

	# -*- coding:utf-8 -*-
	class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None
	class Solution:
    # 返回对应节点TreeNode
    def KthNode(self, pRoot, k):
        if(pRoot==None or k<=0):
            return None
        li=[pRoot]
        l=[pRoot.val]
        while(li):
            index=li[0]
            li=li[1:]
            if(index.left!=None):
                li.append(index.left)
                l.append(index.left.val)
            if(index.right!=None):
                li.append(index.right)
                l.append(index.right.val)
        l.sort()
        if(k>len(l)):
            return None
        target=l[k-1]
        li=[pRoot]
        while(li):
            index=li[0]
            li=li[1:]
            if(index.val==target):
                return index
            if(index.left!=None):
                li.append(index.left)
            if(index.right!=None):
                li.append(index.right)