---
title: '[nowcoder]最小的k个数'
date: 2018-08-02 15:23:21
tags: [剑指Offer,code]
categories: nowcoder
---

## 题目描述

输入n个整数，找出其中最小的K个数。例如输入4,5,1,6,2,7,3,8这8个数字，则最小的4个数字是1,2,3,4,。

题目链接： [https://www.nowcoder.com/practice/6a296eb82cf844ca8539b57c23e6e9bf](https://www.nowcoder.com/practice/6a296eb82cf844ca8539b57c23e6e9bf "https://www.nowcoder.com/practice/6a296eb82cf844ca8539b57c23e6e9bf")

<!-- more -->

## 分析

1. 排序，返回最后k个数。

## 参考代码

	class Solution:
    def GetLeastNumbers_Solution(self, tinput, k):
        # write code here
        tinput.sort()
        if(k>len(tinput) or k<=0):
            return []
        return tinput[:k]

	运行时间： 21ms