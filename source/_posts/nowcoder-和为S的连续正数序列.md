---
title: '[nowcoder]和为S的连续正数序列'
date: 2018-08-04 15:45:28
tags: [剑指Offer,code]
categories: nowcoder
---

## 题目描述

小明很喜欢数学,有一天他在做数学作业时,要求计算出9~16的和,他马上就写出了正确答案是100。但是他并不满足于此,他在想究竟有多少种连续的正数序列的和为100(至少包括两个数)。没多久,他就得到另一组连续正数和为100的序列:18,19,20,21,22。现在把问题交给你,你能不能也很快的找出所有和为S的连续正数序列? Good Luck!

题目链接： [https://www.nowcoder.com/practice/c451a3fd84b64cb19485dad758a55ebe](https://www.nowcoder.com/practice/c451a3fd84b64cb19485dad758a55ebe "https://www.nowcoder.com/practice/c451a3fd84b64cb19485dad758a55ebe")

<!-- more -->

### 输出描述

> 输出所有和为S的连续正数序列。序列内按照从小至大的顺序，序列间按照开始数字从小到大的顺序

## 分析

1. 连续序列（start-end）的和为（end+start）*（end-start+1）/2=sum;
2. 所以end=(pow(1-4*(index-index**2-2*sum),0.5)-1)/2；
3. 且start的值小于sum/2。

## 参考代码

	class Solution:
    def FindContinuousSequence(self, tsum):
        # write code here
        li=[]
        index=1
        while(index<=tsum//2):
            end=(pow(1-4*(index-index**2-2*tsum),0.5)-1)/2
            if(int(end)==end):
                end=int(end)
                li.append([i for i in range(index,end+1)])
            index+=1
        return li

	运行时间： 20 ms