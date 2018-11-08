---
title: '[nowcoder]斐波那契数列'
date: 2018-07-28 21:46:01
tags: [剑指Offer,code]
categories: nowcoder
---

## 题目描述

大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项（从0开始，第0项为0）。
 
n<=39 

题目链接： [https://www.nowcoder.com/practice/c6c7742f5ba7442aada113136ddea0c3](https://www.nowcoder.com/practice/c6c7742f5ba7442aada113136ddea0c3 "https://www.nowcoder.com/practice/c6c7742f5ba7442aada113136ddea0c3")

<!-- more -->

## 分析

1. 斐波那契数列如：1，1，2，3，5，8…… ，即F(1)=1，F(2)=1, F(n)=F(n-1)+F(n-2)（n>=2）
2. 额外增加一个0，a=0,b=1代表前两个数字，每次只需将b赋值给a，a+b赋值给b，循环次数即斐波那契数列项数。

## 参考代码

	class Solution:
    def Fibonacci(self, n):
        # write code here
        a,b=0,1
        while(n):
            a,b=b,a+b
            n-=1
        return a

	运行时间： 30ms
	占用内存： 5644k
