---
title: '[nowcoder]调整数组顺序使得奇数在偶数前面'
date: 2018-07-29 21:26:28
tags: [剑指Offer,code,数组]
categories: nowcoder
---

## 题目描述

输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，所有的偶数位于数组的后半部分，并保证奇数和奇数，偶数和偶数之间的相对位置不变。

题目链接： [https://www.nowcoder.com/practice/beb5aa231adc45b2a5dcc5b62c93f593](https://www.nowcoder.com/practice/beb5aa231adc45b2a5dcc5b62c93f593 "https://www.nowcoder.com/practice/beb5aa231adc45b2a5dcc5b62c93f593")

<!-- more -->

## 分析

1. 因为需要保持相对位置不变，遍历将奇数和偶数分别放在list中；
2. 组合返回即可。

## 参考代码

	class Solution:
    def reOrderArray(self, array):
        # write code here
        s1=[]
        s2=[]
        for index in array:
            if(index%2==0):
                s2.append(index)
            else:
                s1.append(index)
        return s1+s2

	运行时间： 25ms