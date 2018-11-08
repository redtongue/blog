---
title: '[nowcoder]数组中出现次数超过一半的数字'
date: 2018-08-02 15:20:21
tags: [剑指Offer,code,数组]
categories: nowcoder
---

## 题目描述

数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。例如输入一个长度为9的数组{1,2,3,2,2,2,5,4,2}。由于数字2在数组中出现了5次，超过数组长度的一半，因此输出2。如果不存在则输出0。

题目链接： [https://www.nowcoder.com/practice/e8a1b01a2df14cb2b228b30ee6a92163](https://www.nowcoder.com/practice/e8a1b01a2df14cb2b228b30ee6a92163 "https://www.nowcoder.com/practice/e8a1b01a2df14cb2b228b30ee6a92163")

<!-- more -->

## 分析

1. 遍历数组，将数组中的数字及其相应的出现次数保存到dict中；
2. 返回dict中出现次数大于一般的数字，反之返回0；

## 参考代码

	class Solution:
    def MoreThanHalfNum_Solution(self, numbers):
        # write code here
        d={}
        length=len(numbers)
        for index in numbers:
            if(index not in d):
                d[index]=1
            else:
                d[index]+=1
        for index in d:
            if(d[index]>(length/2)):
                return index
        return 0

	运行时间： 27ms