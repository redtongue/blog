---
title: '[nowcoder]两个链表的第一个公共结点'
date: 2018-08-02 17:33:20
tags: [剑指Offer,code,链表]
categories: nowcoder
---

## 题目描述

输入两个链表，找出它们的第一个公共结点。

题目链接： [https://www.nowcoder.com/practice/6ab1d9a29e88450685099d45c9e31e46](https://www.nowcoder.com/practice/6ab1d9a29e88450685099d45c9e31e46 "https://www.nowcoder.com/practice/6ab1d9a29e88450685099d45c9e31e46")

<!-- more -->

## 分析

1. 相当于寻找两个数组的第一个相同数；
2. 遍历两个链表，比较每个结点的val值，相同则返回；
3. 遍历结束返回None。

## 参考代码

	class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None
	
	class Solution:
    def FindFirstCommonNode(self, pHead1, pHead2):
        # write code here
        p=pHead1
        q=pHead2
        if(not pHead1 or not pHead2):
            return None
        while(p!=None):
            q=pHead2
            while(q):
                if(p.val==q.val):
                    return q
                q=q.next
            p=p.next
        return None

	运行时间： 29 ms