---
title: '[nowcoder]复杂链表的复制'
date: 2018-07-31 23:08:48
tags: [剑指Offer,code,二叉树]
categories: nowcoder
---

## 题目描述

输入一个复杂链表（每个节点中有节点值，以及两个指针，一个指向下一个节点，另一个特殊指针指向任意一个节点），返回结果为复制后复杂链表的head。（注意，输出结果中请不要返回参数中的节点引用，否则判题程序会直接返回空）

题目链接： [https://www.nowcoder.com/practice/f836b2c43afc4b35ad6adc41ec941dba](https://www.nowcoder.com/practice/f836b2c43afc4b35ad6adc41ec941dba "https://www.nowcoder.com/practice/f836b2c43afc4b35ad6adc41ec941dba")

<!-- more -->

## 分析

1. 遍历链表可以复制next，但是random指向不一定，所以不能立刻复制，故用dict存储原链表中每个结点的id值（每个结点的id是唯一的）与新结点；
2. 遍历中，复制结点和next指向，random指向原结点的random；
3. 遍历结束后，利用dict重新调整random；
4. 返回p_Head

## 参考代码

	class RandomListNode:
    def __init__(self, x):
        self.label = x
        self.next = None
        self.random = None
	
	class Solution:
    # 返回 RandomListNode
    def Clone(self, pHead):
        # write code here
        head=pHead
        p_Head=None
        new_Head=None
        dict1={}
        while(head):
            node=RandomListNode(head.label)
            node.random=head.random
            dict1[id(head)]=node
            head=head.next
            if(p_Head):
                new_Head.next=node
                new_Head=node
            else:
                new_Head=node
                p_Head=node
        new_Head=p_Head
        while(new_Head):
            if(new_Head.random!=None):
                new_Head.random=dict1[id(new_Head.random)]
            new_Head=new_Head.next
        return p_Head

	运行时间： 21ms