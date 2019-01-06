---
title: '[nowcoder63]数据流中的中位数'
date: 2018-09-22 12:00:41
tags: [剑指Offer,code]
categories: nowcoder
---

## 题目描述

如何得到一个数据流中的中位数？如果从数据流中读出奇数个数值，那么中位数就是所有数值排序之后位于中间的数值。如果从数据流中读出偶数个数值，那么中位数就是所有数值排序之后中间两个数的平均值。我们使用Insert()方法读取数据流，使用GetMedian()方法获取当前读取数据的中位数。

题目链接： [https://www.nowcoder.com/practice/9be0172896bd43948f8a32fb954e1be1](https://www.nowcoder.com/practice/9be0172896bd43948f8a32fb954e1be1 "https://www.nowcoder.com/practice/9be0172896bd43948f8a32fb954e1be1")

<!-- more -->

## 分析

1. 


## 参考代码

	# -*- coding:utf-8 -*-
	class Solution:
    def __init__(self):
        self.li=[]
        self.length=0
    def Insert(self, num):
        # write code here
        for i in range(len(self.li)):
            if(self.li[i]>num):
                self.li=self.li[:i]+[num]+self.li[i:]
                self.length+=1
                break
        else:
            self.li=self.li+[num]
            self.length+=1
    def GetMedian(self,data):
        # write code here
        if(self.length%2==1):
            return self.li[self.length//2]
        else:
            return float(self.li[self.length//2]+self.li[self.length//2-1])/2