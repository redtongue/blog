---
title: '[nowcoder]合并两个排序的链表'
date: 2018-07-29 21:41:19
tags: [剑指Offer,code,链表]
categories: nowcoder
---

## 题目描述

输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则。

题目链接： [https://www.nowcoder.com/practice/d8b6b4358f774294a89de2a6ac4d9337](https://www.nowcoder.com/practice/d8b6b4358f774294a89de2a6ac4d9337 "https://www.nowcoder.com/practice/d8b6b4358f774294a89de2a6ac4d9337")

<!-- more -->

## 分析

1. 首先比较两个链表的表头，较小的当作新链表的表头；
2. 同时遍历两个链表，一次将较小的结点加入到新链表中，知道有一个链表遍历结束；
3. 将另外一个没有遍历完的链表的剩余部分直接加入到新链表的尾部。

## 参考代码

	class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

	class Solution:
    # 返回合并后列表
    def Merge(self, pHead1, pHead2):
        # write code here
        head=None
        if(pHead1!=None and pHead2!=None):
            if(pHead1.val < pHead2.val):
                head=pHead1
                pHead1=pHead1.next
            else:
                head=pHead2
                pHead2=pHead2.next
        elif(pHead1!=None):
            head=pHead1
            pHead1=pHead1.next
        elif(pHead2!=None):
            head=pHead2
            pHead2=pHead2.next
        h=head
        while(pHead1!=None and pHead2!=None):
            if(pHead1.val < pHead2.val):
                h.next=pHead1
                h=pHead1
                pHead1=pHead1.next
            else:
                h.next=pHead2
                h=pHead2
                pHead2=pHead2.next
        if(pHead1!=None):
            h.next=pHead1
        if(pHead2!=None):
            h.next=pHead2
        return head

	运行时间： 22ms