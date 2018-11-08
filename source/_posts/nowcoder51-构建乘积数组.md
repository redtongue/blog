---
title: '[nowcoder51]构建乘积数组'
date: 2018-09-01 19:16:34
tags: [剑指Offer,code,数组]
categories: nowcoder
---

## 题目描述

给定一个数组A[0,1,...,n-1],请构建一个数组B[0,1,...,n-1],其中B中的元素B[i]=A[0]*A[1]*...*A[i-1]*A[i+1]*...*A[n-1]。不能使用除法。

题目链接： [https://www.nowcoder.com/practice/94a4d381a68b47b7a8bed86f2975db46](https://www.nowcoder.com/practice/94a4d381a68b47b7a8bed86f2975db46 "https://www.nowcoder.com/practice/94a4d381a68b47b7a8bed86f2975db46")

<!-- more -->

## 分析

1. 如下表格所示，第i行即需要返回B[i]；
2. 故做两次循环，计算上下半角，得到最后的结果。


|   1  | A[1] | A[2] | A[3] |
| ------ | ------ | ------ | ------ |
| A[0] |   1  | A[2] | A[3] |
| A[0] | A[1] |   1  | A[3] |
| A[0] | A[1] | A[2] |   1  |


## 参考代码

	# -*- coding:utf-8 -*-
	class Solution:
    def multiply(self, A):
        # write code here
        length=len(A)
        B=[1]*length
        for i in range(1,length):
            B[i]=B[i-1]*A[i-1]
        temp=1
        for i in range(length-2,-1,-1):
            temp*=A[i+1]
            B[i]*=temp
        return B

	运行时间： 24 ms