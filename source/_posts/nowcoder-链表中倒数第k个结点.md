---
title: '[nowcoder]链表中倒数第k个结点'
date: 2018-07-29 21:33:30
tags: [剑指Offer,code,链表]
categories: nowcoder
---

## 题目描述

输入一个链表，输出该链表中倒数第k个结点。

题目链接： [https://www.nowcoder.com/practice/529d3ae5a407492994ad2a246518148a](https://www.nowcoder.com/practice/529d3ae5a407492994ad2a246518148a "https://www.nowcoder.com/practice/529d3ae5a407492994ad2a246518148a")

<!-- more -->

## 分析

1. 遍历链表，将所有结点放在list中；
2. 返回list[-k]。

## 参考代码

	class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

	class Solution:
    def FindKthToTail(self, head, k):
        # write code here
        h=head
        l=[]
        while(h):
            l.append(h)
            h=h.next
        if(k>len(l) or k<=0):
            return
        return l[-k]

	运行时间： 24ms