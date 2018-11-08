---
title: '[nowcoder50]数组中重复的数字'
date: 2018-09-01 19:12:04
tags: [剑指Offer,code,数组]
categories: nowcoder
---

## 题目描述

在一个长度为n的数组里的所有数字都在0到n-1的范围内。 数组中某些数字是重复的，但不知道有几个数字是重复的。也不知道每个数字重复几次。请找出数组中任意一个重复的数字。 例如，如果输入长度为7的数组{2,3,1,0,2,5,3}，那么对应的输出是第一个重复的数字2。

题目链接： [https://www.nowcoder.com/practice/623a5ac0ea5b4e5f95552655361ae0a8](https://www.nowcoder.com/practice/623a5ac0ea5b4e5f95552655361ae0a8 "https://www.nowcoder.com/practice/623a5ac0ea5b4e5f95552655361ae0a8")

<!-- more -->

## 分析

1. 遍历numbers，若当前数字存在d（元组）中，则说明之前出现过这个数字，duplication[0]=number，返回True；
2. 反之，将number加入到中；
3. 返回False。

## 参考代码

	# -*- coding:utf-8 -*-
	class Solution:
    # 这里要特别注意~找到任意重复的一个值并赋值到duplication[0]
    # 函数返回True/False
    def duplicate(self, numbers, duplication):
        # write code here
        d=set()
        for number in numbers:
            if(number in d):
                duplication[0] = number
                return True
            else:
                d.add(number)
        return False

	运行时间： 20 ms