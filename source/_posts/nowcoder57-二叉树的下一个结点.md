---
title: '[nowcoder57]二叉树的下一个结点'
date: 2018-09-15 11:51:37
tags: [剑指Offer,code,二叉树]
categories: nowcoder
---

## 题目描述

给定一个二叉树和其中的一个结点，请找出中序遍历顺序的下一个结点并且返回。注意，树中的结点不仅包含左右子结点，同时包含指向父结点的指针。

题目链接： [https://www.nowcoder.com/practice/9023a0c988684a53960365b889ceaf5e](https://www.nowcoder.com/practice/9023a0c988684a53960365b889ceaf5e "https://www.nowcoder.com/practice/9023a0c988684a53960365b889ceaf5e")

<!-- more -->

## 分析

1. 


## 参考代码

	-*- coding:utf-8 -*-
	class TreeLinkNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None
        self.next = None

	class Solution:
    def GetNext(self, pNode):
        # write code here
        if(pNode.right==None):
            if(pNode.next==None):
                return None
            p=pNode.next
            if(p.left==pNode):
                return p
            else:
                q=pNode
                while(p.right==q and p.next!=None):
                    p=p.next
                    q=q.next
                if(p.left==q):
                    return p
                return None
        else:
            p=pNode.right
            while(p.left!=None):
                p=p.left
            return p