---
title: '[nowcoder61]序列化二叉树'
date: 2018-09-15 11:57:37
tags: [剑指Offer,code,二叉树]
categories: nowcoder
---

## 题目描述

请实现两个函数，分别用来序列化和反序列化二叉树

题目链接： [https://www.nowcoder.com/practice/cf7e25aa97c04cc1a68c8f040e71fb84](https://www.nowcoder.com/practice/cf7e25aa97c04cc1a68c8f040e71fb84 "https://www.nowcoder.com/practice/cf7e25aa97c04cc1a68c8f040e71fb84")

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
    def Serialize(self, root):
        # write code here
        s=''
        if(root==None):
            return s
        li=[root]
        l=[]
        st=''
        s=str(root.val)+','
        while(li or l):
            if(not li):
                li=l
                if(st):
                    s+=st
                st=''
                l=[]
            if(not li):
                continue
            ro=li[0];
            li=li[1:]
            if(ro.left!=None):
                l.append(ro.left)
                st+=str(ro.left.val)+','
            else:
                st+='#,'
            if(ro.right!=None):
                l.append(ro.right)
                st+=str(ro.right.val)+','
            else:
                st+='#,'
        return s[:-1]
    def Deserialize(self, s):
        if(len(s)==0):
            return None
        s=s.split(',')
        head=TreeNode(int(s[0]))
        q=head
        li=[q]
        i=1
        length=len(s)
        while(li and i<length):
            index=li[0]
            li=li[1:]
            if(i<length and s[i]!='#'):
                q=TreeNode(int(s[i]))
                li.append(q)
                index.left=q
            i+=1
            if(i<length and s[i]!='#'):
                q=TreeNode(int(s[i]))
                li.append(q)
                index.right=q
            i+=1
        return head