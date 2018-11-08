---
title: '[nowcoder]跳台阶'
date: 2018-07-28 21:52:53
tags: [剑指Offer,code]
categories: nowcoder
---

## 题目描述

一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果）。

题目链接： [https://www.nowcoder.com/practice/8c82a5b80378478f9484d87d1c5f12a4](https://www.nowcoder.com/practice/8c82a5b80378478f9484d87d1c5f12a4 "https://www.nowcoder.com/practice/8c82a5b80378478f9484d87d1c5f12a4")

<!-- more -->

## 分析

1. 刚看到这个题目我想的是用递归来做，可惜失败了，时间超限；
2. 后来想一想青蛙一次只能跳一级或跳两级，他每一步选择只有两个，用递归确实浪费了；
3. 用分治的思想的来想，那么青蛙的最后一跳也只能是**一个台阶或两个台阶**，设F(n)为n级的台阶总共的跳法总数，那么F(n)=F(n-1)+F(n-2)。

## 参考代码

	class Solution:
    def jumpFloor(self, number):
        # write code here
        a,b=1,1
        while(number):
            a,b=b,a+b
            number-=1
        return a

	运行时间： 21ms
	占用内存： 5732k

## 递归代码

好吧，这是**错误代码**，但是万一下一次青蛙比较厉害，可以很多台阶，就可以借鉴了。

	class Solution:
    def jumpFloor(self, number):
        if(n==0):
            return 1
        else:
			#如果青蛙比较厉害，下面就需要相应修改了
            if(n>1):
                a=self.jumpFloor(n-1)
                a+=self.jumpFloor(n-2)
            else:
                a=self.jumpFloor(n-1)
            return a
        return _inter(number)
