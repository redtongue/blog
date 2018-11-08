---
title: '[nowcoder]反转链表'
date: 2018-07-29 21:36:37
tags: [剑指Offer,code,链表]
categories: nowcoder
---

## 题目描述

输入一个链表，反转链表后，输出新链表的表头。

题目链接： [https://www.nowcoder.com/practice/75e878df47f24fdc9dc3e400ec6058ca](https://www.nowcoder.com/practice/75e878df47f24fdc9dc3e400ec6058ca "https://www.nowcoder.com/practice/75e878df47f24fdc9dc3e400ec6058ca")

<!-- more -->

## 分析

1. 遍历每个结点，首先保存该结点的next，再将该结点指向前一个结点；
2. 知道遍历到最后一个结点（next为None），将该结点指向前一个结点，并返回该结点。

## 参考代码

	class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

	class Solution:
    # 返回ListNode
    def ReverseList(self, pHead):
        # write code here
        if(pHead==None or pHead.next==None):
            return pHead
        ne=None
        p=pHead
        while(p):
            index=p.next
            p.next=ne
            ne=p
            p=index
        return ne

	运行时间： 21ms