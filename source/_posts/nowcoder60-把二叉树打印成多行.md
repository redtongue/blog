---
title: '[nowcoder60]把二叉树打印成多行'
date: 2018-09-15 11:56:35
tags: [剑指Offer,code,二叉树]
categories: nowcoder
---

## 题目描述

从上到下按层打印二叉树，同一层结点从左至右输出。每一层输出一行。

题目链接： [https://www.nowcoder.com/practice/445c44d982d04483b04a54f298796288](https://www.nowcoder.com/practice/445c44d982d04483b04a54f298796288 "https://www.nowcoder.com/practice/445c44d982d04483b04a54f298796288")

<!-- more -->

## 分析

1. 


## 参考代码

	-*- coding:utf-8 -*-
	class TreeNode:
    def __init__(self, x):
        self.val = x
         self.left = None
        self.right = None

	class Solution:
    # 返回二维列表[[1,2],[4,5]]
    def Print(self, pRoot):
        li=[pRoot]
        l=[]
        r_li=[]
        if(pRoot==None):
            return r_li
        r_li.append([pRoot.val])
        while(li or l):
            if(not li):
                li=l
                if(l):
                    r_li.append([i.val for i in l])
                l=[]
            if(not li):
                continue
            ro=li[0];
            li=li[1:]
            if(ro.left!=None):
                l.append(ro.left)
            if(ro.right!=None):
                l.append(ro.right)
        return r_li