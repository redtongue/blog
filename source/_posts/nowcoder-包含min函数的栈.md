---
title: '[nowcoder]包含min函数的栈'
date: 2018-07-29 22:13:52
tags: [剑指Offer,code,栈]
categories: nowcoder
---

## 题目描述

定义栈的数据结构，请在该类型中实现一个能够得到栈中所含最小元素的min函数（时间复杂度应为O（1））。

题目链接： [https://www.nowcoder.com/practice/4c776177d2c04c2494f2555c9fcc1e49](https://www.nowcoder.com/practice/4c776177d2c04c2494f2555c9fcc1e49 "https://www.nowcoder.com/practice/4c776177d2c04c2494f2555c9fcc1e49")

<!-- more -->

## 分析

1. 用list代替栈，append代替栈的push操作，pop代替栈的pop操作，定义m为最小值
2. push：将m更新为m和node之间的最小值
3. pop：pop出最后一个数，如果pop出的是最小值，则重新更新m
4. top：返回list最后一个数
5. min：返回m

### note

要求时间复杂度应为O（1），但其实测试用例没有这么大，[leetcode](https://leetcode.com/problems/maximum-frequency-stack/description/ "https://leetcode.com/problems/maximum-frequency-stack/description/")上有一题上是要返回频率最大的数字，可以借鉴上面的方法，参考代码：[https://redtongue.coding.me/2018/08/27/895-Maximum-Frequency-Stack/](https://redtongue.coding.me/2018/08/27/895-Maximum-Frequency-Stack/ "https://redtongue.coding.me/2018/08/27/895-Maximum-Frequency-Stack/")

## 参考代码

	class Solution:
    def __init__(self):
        self.stack=[]
        self.m=None
    def push(self, node):
        # write code here
        self.stack.append(node)
        if(self.m==None):
            self.m=node
        else:
            self.m=min(self.m,node)
    def pop(self):
        # write code here
        self.stack.pop()
        if(self.stack):
            self.m=min(self.stack)
        else:
            self.m=None
    def top(self):
        return self.stack[-1]
        # write code here
    def min(self):
        # write code here
        return self.m

	运行时间： 21ms