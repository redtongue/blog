---
title: '[nowcoder56]删除链表中重复的结点'
date: 2018-09-08 11:49:32
tags: [剑指Offer,code,链表]
categories: nowcoder
---

## 题目描述

在一个排序的链表中，存在重复的结点，请删除该链表中重复的结点，重复的结点不保留，返回链表头指针。 例如，链表1->2->3->3->4->4->5 处理后为 1->2->5

题目链接： [https://www.nowcoder.com/practice/fc533c45b73a41b0b44ccba763f866ef](https://www.nowcoder.com/practice/fc533c45b73a41b0b44ccba763f866ef "https://www.nowcoder.com/practice/fc533c45b73a41b0b44ccba763f866ef")

<!-- more -->

## 分析

1. 


## 参考代码

    -*- coding:utf-8 -*-
	class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None
	
	class Solution:
    def deleteDuplication(self, pHead):
        # write code here
        d=set()
        single=set()
        p=pHead
        while(p!=None):
            if(p.val not in d):
                d.add(p.val)
                single.add(p.val)
            else:
                if(p.val in single):
                    single.remove(p.val)
            p=p.next
        p=pHead
        realHead=None
        real=None
        i=0
        while(p):
            i+=1
            if(p.val in single):
                if(realHead==None):
                    realHead=p
                    real=p
                else:
                    real.next=p
                    real=p
            p=p.next
        if(real!=None):
            real.next=None
        return realHead
        