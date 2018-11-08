---
title: '[nowcoder]变态跳台阶'
date: 2018-07-28 22:07:51
tags: [剑指Offer,code]
categories: nowcoder
---

## 题目描述

一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶总共有多少种跳法。

题目链接： [https://www.nowcoder.com/practice/22243d016f6b47f2a6928b4313c85387](https://www.nowcoder.com/practice/22243d016f6b47f2a6928b4313c85387 "https://www.nowcoder.com/practice/22243d016f6b47f2a6928b4313c85387")

<!-- more -->

在[跳台阶](https://redtongue.coding.me/2018/08/28/nowcoder-跳台阶/ "https://redtongue.coding.me/2018/08/28/nowcoder-跳台阶/")中的错误代码中考虑可能会有比较厉害的青蛙，万万没想到，来了个变态。

## 分析

1. 在跳台阶中，青蛙一次只能跳一级或跳两级,用分治的思想的来想，那么青蛙的最后一跳也只能是**一个台阶或两个台阶**，设F(n)为n级的台阶总共的跳法总数，那么F(n)=F(n-1)+F(n-2)；
2. 同理，虽然变态，但是$F(n) = \sum_{i=0}^{n-1}{F(i)}$，其中F(0)=1
3. 这个规律是显而易见的，但是我们列出来几项方便看的更清楚，{1，2，4，8，16，……}
4. 虽然变态，但是代码很溜。

## 参考代码

	class Solution:
    def jumpFloorII(self, number):
        # write code here
        return 2**(number-1)

	运行时间： 22ms
	占用内存： 5728k