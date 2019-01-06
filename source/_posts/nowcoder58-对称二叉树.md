---
title: '[nowcoder58]对称二叉树'
date: 2018-09-15 11:53:12
tags: [剑指Offer,code,二叉树]
categories: nowcoder
---

## 题目描述

请实现一个函数，用来判断一颗二叉树是不是对称的。注意，如果一个二叉树同此二叉树的镜像是同样的，定义其为对称的。

题目链接： [https://www.nowcoder.com/practice/ff05d44dfdb04e1d83bdbdab320efbcb](https://www.nowcoder.com/practice/ff05d44dfdb04e1d83bdbdab320efbcb "https://www.nowcoder.com/practice/ff05d44dfdb04e1d83bdbdab320efbcb")

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
    def isSymmetrical(self, pRoot):
        # write code here
        if(pRoot==None):
            return True
        li=[pRoot]
        left_li=[pRoot]
        right_li=[pRoot]
        while(li):
            index=li[0]
            li=li[1:]
            if(index==None):
                continue
            if(True):
                li.append(index.left)
                left_li.append(index.left)
            if(True):
                li.append(index.right)
                left_li.append(index.right)
        li=[pRoot]
        l=[]
        while(li or l):
            if(not li):
                li=l
                l=[]
            index=li[0]
            li=li[1:]
            if(index==None):
                continue
            if(True):
                l.append(index.right)
                right_li.append(index.right)
            if(True):
                l.append(index.left)
                right_li.append(index.left)
        for i,j in zip(left_li,right_li):
            #print(i,j)
            if(i!=None):
                if(j==None):
                    return False
                else:
                    if(i.val!=j.val):
                        return None
            else:
                if(j!=None):
                    return False
        return True