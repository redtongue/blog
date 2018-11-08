---
title: '[nowcoder]二进制中1的个数'
date: 2018-07-29 21:11:09
tags: [剑指Offer,code]
categories: nowcoder
---

## 题目描述

输入一个整数，输出该数二进制表示中1的个数。其中负数用补码表示。

题目链接： [https://www.nowcoder.com/practice/8ee967e43c2c4ec193b040ea7fbb10b8](https://www.nowcoder.com/practice/8ee967e43c2c4ec193b040ea7fbb10b8 "https://www.nowcoder.com/practice/8ee967e43c2c4ec193b040ea7fbb10b8")

<!-- more -->

## 分析

1. 首先用list存储整数的二进制形式；
2. 如果为正数，返回list的和；
3. 否则，list中{0，1}取反，再加一。

## 参考代码

	class Solution:
    def NumberOf1(self, n):
        # write code here
        index=abs(n)
        li=[0]*32
        i=-1
        while(index>0):
            li[i]=index%2
            index//=2
            i-=1
        if(n>0):
            return sum(li)
        else:
            l=[0 if ii else 1 for ii in li]
            left=1
            for i in range(len(l)-1,-1,-1):
                if(not left):
                    break
                if(l[i]):
                    if(left):
                        l[i]=0
                else:
                    if(left):
                        l[i] = 1
                        left=0
            return sum(l)

	运行时间： 21ms
	占用内存： 5736k