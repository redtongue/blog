---
title: '[nowcoder59]按之字形顺序打印二叉树'
date: 2018-09-15 11:55:12
tags: [剑指Offer,code,二叉树]
categories: nowcoder
---

## 题目描述

请实现一个函数按照之字形打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右至左的顺序打印，第三行按照从左到右的顺序打印，其他行以此类推。

题目链接： [https://www.nowcoder.com/practice/91b69814117f4e8097390d107d2efbe0](https://www.nowcoder.com/practice/91b69814117f4e8097390d107d2efbe0 "https://www.nowcoder.com/practice/91b69814117f4e8097390d107d2efbe0")

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
    def Print(self, pRoot):
        li=[pRoot]
        l=[]
        index=0
        r_li=[]
        if(pRoot==None):
            return r_li
        r_li.append([pRoot.val])
        while(li or l):
            if(not li):
                li=l
                if(l):
                    index+=1
                    if(index%2==1):
                        l.reverse()
                        r_li.append([i.val for i in l])
                        l.reverse()
                    else:
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