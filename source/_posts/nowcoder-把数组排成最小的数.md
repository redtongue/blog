---
title: '[nowcoder]把数组排成最小的数'
date: 2018-08-02 16:32:14
tags: [剑指Offer,code,数组]
categories: nowcoder
---

## 题目描述

输入一个正整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。例如输入数组{3，32，321}，则打印出这三个数字能排成的最小数字为321323。

题目链接： [https://www.nowcoder.com/practice/8fecd3f8ba334add803bf2a06af1b993](https://www.nowcoder.com/practice/8fecd3f8ba334add803bf2a06af1b993 "https://www.nowcoder.com/practice/8fecd3f8ba334add803bf2a06af1b993")

<!-- more -->

## 分析

1. 定义一个新的比较函数，返回a+b拼接的数字与b+a拼接的数字的差值；
2. 按题意，放在前面是的组合数字更小的数字应该放在前面，所以将新定义的函数传入sorted作为cmp参数，直接调用sorted排序；
3. 主义，sorted的cmp参数在python3中已经不可以使用了。

## 参考代码

	class Solution:
    def PrintMinNumber(self, numbers):
        # write code here
        def judge(a,b):#a<=b
            return int(str(a)+str(b))-int(str(b)+str(a))
            
        numbers=sorted(numbers,cmp=judge)
        index=''
        for i in numbers:
            index+=str(i)
        return index

	运行时间： 21 ms