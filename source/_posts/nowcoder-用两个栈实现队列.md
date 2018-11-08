---
title: '[nowcoder]用两个栈实现队列'
date: 2018-07-28 21:29:09
tags: [剑指Offer,code,队列,栈]
categories: nowcoder
---

## 题目描述

用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型。

题目链接： [https://www.nowcoder.com/practice/54275ddae22f475981afa2244dd448c6](https://www.nowcoder.com/practice/54275ddae22f475981afa2244dd448c6 "https://www.nowcoder.com/practice/54275ddae22f475981afa2244dd448c6")

<!-- more -->

## 分析

1. 栈是先进后出，队列是先进先出，用list的append代表栈的push操作，list的pop代表栈的pop操作；
2. 用s1存储队列push的数据，s2存储队列需要pop的数据；
3. 如果s2为空则将s1的所有数据pop出来后append到s2中，以此将数据反转；
4. 用s2的pop替代队列的pop操作。

## 参考代码

	class Solution:
    def __init__(self):
        self.s1=[]
        self.s2=[]
    def push(self, node):
        # write code here
        self.s1.append(node)
    def pop(self):
        # return xx
        if(not self.s2):
            while(self.s1):
                self.s2.append(self.s1.pop())
        return self.s2.pop()

	运行时间： 28ms
	占用内存： 5728k