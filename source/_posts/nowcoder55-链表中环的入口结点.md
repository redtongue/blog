---
title: '[nowcoder55]链表中环的入口结点'
date: 2018-09-08 11:47:43
tags: [剑指Offer,code,链表]
categories: nowcoder
---

## 题目描述

给一个链表，若其中包含环，请找出该链表的环的入口结点，否则，输出null。

题目链接： [https://www.nowcoder.com/practice/253d2c59ec3e4bc68da16833f79a38e4](https://www.nowcoder.com/practice/253d2c59ec3e4bc68da16833f79a38e4 "https://www.nowcoder.com/practice/253d2c59ec3e4bc68da16833f79a38e4")

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
    def EntryNodeOfLoop(self, pHead):
        # write code here
        if(not pHead or not pHead.next):
            return None
        p1=pHead
        p2=pHead
        while(p2!=None and p2.next!=None):
            p1=p1.next
            p2=p2.next.next
            if(p2==p1):
                p1=pHead
                while(p1!=p2):
                    p1=p1.next
                    p2=p2.next
                return p1
        return None