---
title: '[nowcoder]矩形覆盖'
date: 2018-07-28 22:22:40
tags: [剑指Offer,code]
categories: nowcoder
---

## 题目描述

我们可以用2*1的小矩形横着或者竖着去覆盖更大的矩形。请问用n个2*1的小矩形无重叠地覆盖一个2*n的大矩形，总共有多少种方法？

题目链接： [https://www.nowcoder.com/practice/72a5a919508a4251859fb2cfb987a0e6](https://www.nowcoder.com/practice/72a5a919508a4251859fb2cfb987a0e6 "https://www.nowcoder.com/practice/72a5a919508a4251859fb2cfb987a0e6")

<!-- more -->

## 分析

1. 这几题可能是跟斐波那契数列杠上了，同样的分治思想，设F(n)为覆盖2*n的大矩形的方法总数，因为都是2*1的小矩形，所以F(n-1)和F(n-2)可以把F(n)的所有可能性覆盖，虽然F(n-2)到F(n)之间的2*2的剩余有两种覆盖方法，但是其中一种是F(n-1)中已经包含的；
2. 代码也就显而易见了。

## 参考代码

	class Solution:
    def rectCover(self, number):
        # write code here
        if(number==0):
            return 0
        a,b=1,1
        while(number):
            a,b=b,a+b
            number-=1
        return a

	运行时间： 21ms
	占用内存： 5732k