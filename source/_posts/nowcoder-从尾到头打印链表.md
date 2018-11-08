---
title: '[nowcoder]从尾到头打印链表'
date: 2018-07-28 21:09:57
tags: [剑指Offer,code,链表]
categories: nowcoder
---

## 题目描述

输入一个链表，按链表值从尾到头的顺序返回一个ArrayList。

题目链接： [https://www.nowcoder.com/practice/d0267f7f55b3412ba93bd35cfa8e8035](https://www.nowcoder.com/practice/d0267f7f55b3412ba93bd35cfa8e8035 "https://www.nowcoder.com/practice/d0267f7f55b3412ba93bd35cfa8e8035")

<!-- more -->

## 分析

1. 从头指针开支遍历链表，将每个节点的值（ListNode.val）存储到list中，要求是从尾到头，所以每次添加到list中时用list=[ListNode.val]+list。

## 参考代码

	class ListNode:
    def __init__(self, x):
         self.val = x
         self.next = None

	class Solution:
    # 返回从尾部到头部的列表值序列，例如[1,2,3]
    def printListFromTailToHead(self, listNode):
        # write code here
        li=[]
        node=listNode
        while(node!=None):
            li=[node.val]+li
            node=node.next
        return li

	运行时间： 22ms
	占用内存： 5728k