---
title: '[nowcoder]数组中只出现一次的数字'
date: 2018-08-02 17:49:32
tags: [剑指Offer,code,数组]
categories: nowcoder
---

## 题目描述

一个整型数组里除了两个数字之外，其他的数字都出现了偶数次。请写程序找出这两个只出现一次的数字。

题目链接： [https://www.nowcoder.com/practice/e02fdb54d7524710a7d664d082bb7811](https://www.nowcoder.com/practice/e02fdb54d7524710a7d664d082bb7811 "https://www.nowcoder.com/practice/e02fdb54d7524710a7d664d082bb7811")

<!-- more -->

## 分析

1. 遍历数组，用dict存储每个数字及其出现的次数；
2. 遍历dict，返回所有出现一次的数字。

## 参考代码

	class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None
	
	class Solution:
    # 返回[a,b] 其中ab是出现一次的两个数字
    def FindNumsAppearOnce(self, array):
        # write code here
        d={}
        for index in array:
            if(index in d):
                d[index]+=1
            else:
                d[index]=1
        l=[]
        for index in d:
            if(d[index]%2==1):
                l.append(index)
        return l

	运行时间： 21 ms