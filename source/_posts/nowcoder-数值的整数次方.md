---
title: '[nowcoder]数值的整数次方'
date: 2018-07-29 21:20:58
tags: [剑指Offer,code]
categories: nowcoder
---

## 题目描述

给定一个double类型的浮点数base和int类型的整数exponent。求base的exponent次方。

题目链接： [https://www.nowcoder.com/practice/1a834e5e3e1a4b7ba251417554e07c00](https://www.nowcoder.com/practice/1a834e5e3e1a4b7ba251417554e07c00 "https://www.nowcoder.com/practice/1a834e5e3e1a4b7ba251417554e07c00")

<!-- more -->

## 分析

1. 如果指数exponent是负数，只是将正数次幂的结果取倒数；
2. 结果为result=1乘以base指数exponent次。

## 参考代码

	class Solution:
    def Power(self, base, exponent):
        # write code here
        judge=0
        if(exponent<0):
            judge=1
            exponent*=(-1)
        result=1
        while(exponent):
            result*=base
            exponent-=1
        if(judge):
            return 1/result
        else:
            return result

	运行时间： 21ms
	占用内存： 5852k