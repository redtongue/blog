---
title: '[nowcoder64]滑动窗口的最大值'
date: 2018-09-22 12:02:17
tags: [剑指Offer,code]
categories: nowcoder
---

## 题目描述

给定一个数组和滑动窗口的大小，找出所有滑动窗口里数值的最大值。例如，如果输入数组{2,3,4,2,6,2,5,1}及滑动窗口的大小3，那么一共存在6个滑动窗口，他们的最大值分别为{4,4,6,6,6,5}； 针对数组{2,3,4,2,6,2,5,1}的滑动窗口有以下6个： {[2,3,4],2,6,2,5,1}， {2,[3,4,2],6,2,5,1}， {2,3,[4,2,6],2,5,1}， {2,3,4,[2,6,2],5,1}， {2,3,4,2,[6,2,5],1}， {2,3,4,2,6,[2,5,1]}。

题目链接： [https://www.nowcoder.com/practice/1624bc35a45c42c0bc17d17fa0cba788](https://www.nowcoder.com/practice/1624bc35a45c42c0bc17d17fa0cba788 "https://www.nowcoder.com/practice/1624bc35a45c42c0bc17d17fa0cba788")

<!-- more -->

## 分析

1. 


## 参考代码

	# -*- coding:utf-8 -*-
	class Solution:
    def maxInWindows(self, num, size):
        # write code here
        if(size<=0 or size>len(num)):
            return []
        m=max(num[:size])
        l=[m]
        for i in range(1,len(num)-size+1):
            if(num[i+size-1]>=m):
                m=num[i+size-1]
                l.append(m)
            else:
                if(num[i-1]<m):
                    l.append(m)
                else:
                    m=max(num[i:i+size])
                    l.append(m)
        return l
