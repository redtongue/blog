---
title: '[nowcoder]二维数组中的查找'
date: 2018-07-28 20:53:04
tags: [剑指Offer,code,查找]
categories: nowcoder
---

## 题目描述

在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

题目链接： [https://www.nowcoder.com/practice/abc3fe2ce8e146608e868a70efebf62e](https://www.nowcoder.com/practice/abc3fe2ce8e146608e868a70efebf62e "https://www.nowcoder.com/practice/abc3fe2ce8e146608e868a70efebf62e")

<!-- more -->

## 分析

1. 每一行都按照从左到右递增，每一列都按照从上到下递增，所以每一行最大数是最后一个
2. 比较每一行的最后一个数字与target的大小，如果target大，则目标在下一行，否则，目标在这一行中，将这一行的数字逐个与target比较。
3. 如果到最后一行也没有与target相等的数，返回False

## 参考代码

	class Solution:
    # array 二维列表
    def Find(self, target, array):
        for row in array:
            if(len(row)>0 and target>row[-1]):
                continue
            else:
                for i in row:
                    if(i==target):
                        return True
        return False

	运行时间： 184ms
	占用内存： 5724k
