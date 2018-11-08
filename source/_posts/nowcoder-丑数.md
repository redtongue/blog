---
title: '[nowcoder]丑数'
date: 2018-08-02 16:47:31
tags: [剑指Offer,code,数组]
categories: nowcoder
---

## 题目描述

把只包含质因子2、3和5的数称作丑数（Ugly Number）。例如6、8都是丑数，但14不是，因为它包含质因子7。 习惯上我们把1当做是第一个丑数。求按从小到大的顺序的第N个丑数。

题目链接： [https://www.nowcoder.com/practice/6aa9e04fc3794f68acf8778237ba065b](https://www.nowcoder.com/practice/6aa9e04fc3794f68acf8778237ba065b "https://www.nowcoder.com/practice/6aa9e04fc3794f68acf8778237ba065b")

<!-- more -->

## 分析

1. 由于丑数是只包含质因子2、3和5的数，所以每个数都是由若干个2，3，5相乘得来的；
2. 故循环计算list存储的数分别乘以2，3，5，将最小的数append到list中，同时，该数字对应的在list中的位置后移；
3. 返回最后一个数

## 参考代码

	class Solution:
    def GetUglyNumber_Solution(self, index):
        # write code here
        li=[1]
        index2,index3,index5=0,0,0
        if(index<=0):
            return 0
        while(index-1):
            m=min(li[index2]*2,li[index3]*3,li[index5]*5)
            li.append(m)
            if(m%2==0):
                index2+=1
            if(m%3==0):
                index3+=1
            if(m%5==0):
                index5+=1
            index-=1
        return li[-1]

	运行时间： 27 ms