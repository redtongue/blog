---
title: '[nowcoder]旋转数组的最小数字'
date: 2018-07-28 21:39:53
tags: [剑指Offer,code,查找]
categories: nowcoder
---

## 题目描述

把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。 输入一个非减排序的数组的一个旋转，输出旋转数组的最小元素。 例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为1。 NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。

题目链接： [https://www.nowcoder.com/practice/9f3231a991af4f55b95579b44b7a01ba](https://www.nowcoder.com/practice/9f3231a991af4f55b95579b44b7a01ba "https://www.nowcoder.com/practice/9f3231a991af4f55b95579b44b7a01ba")

<!-- more -->

## 分析

1. 输入是一个非减排序的数组，如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，所以最小数字就是第一个小于前面数字的数字。
2. 如果数组长度为0，返回0。

## 参考代码

	class Solution:
    def minNumberInRotateArray(self, rotateArray):
        # write code here
        if(len(rotateArray)==0):
            return 0
        index=rotateArray[0]
        for i in rotateArray:
            if i < index:
                return i

	运行时间： 549ms
	占用内存： 5860k