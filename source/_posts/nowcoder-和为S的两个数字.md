---
title: '[nowcoder]和为S的两个数字'
date: 2018-08-04 15:54:13
tags: [剑指Offer,code]
categories: nowcoder
---

## 题目描述

输入一个递增排序的数组和一个数字S，在数组中查找两个数，使得他们的和正好是S，如果有多对数字的和等于S，输出两个数的乘积最小的。

题目链接： [https://www.nowcoder.com/practice/390da4f7a00f44bea7c2f3d19491311b](https://www.nowcoder.com/practice/390da4f7a00f44bea7c2f3d19491311b "https://www.nowcoder.com/practice/390da4f7a00f44bea7c2f3d19491311b")

<!-- more -->

### 输出描述

> 对应每个测试案例，输出两个数，小的先输出。

## 分析

1. 两个数的和相等乘积最小，只需要差值最大，类比同周长的矩形和正方形面积，遍历数组，第一个满足的即是最小乘积；
2. i，j指向数字首尾，如果两个数和大于tsum，向左移动j；
3. 如果和为tsum，返回结果；
4. 反之i，j均向右移动；
5. 循环2，3，4。

## 参考代码

	class Solution:
    def FindNumbersWithSum(self, array, tsum):
        # write code here
        j=len(array)-1
        i=0
        while(i<=j):
            while(array[i]+array[j]>tsum):
                j-=1
            if(array[i]+array[j]==tsum):
                return [array[i],array[j]]
            else:
                j+=1
                i+=1
        return []

	运行时间： 21 ms