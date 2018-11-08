---
title: '[nowcoder]数字在排序数组中出现的次数'
date: 2018-08-02 17:36:55
tags: [剑指Offer,code,数组]
categories: nowcoder
---

## 题目描述

统计一个数字在排序数组中出现的次数。

题目链接： [https://www.nowcoder.com/practice/70610bf967994b22bb1c26f9ae901fa2](https://www.nowcoder.com/practice/70610bf967994b22bb1c26f9ae901fa2 "https://www.nowcoder.com/practice/70610bf967994b22bb1c26f9ae901fa2")

<!-- more -->

## 分析

1. 遍历找到数组中等于k的数字（代码中是二分查找）；
2. i，j分别向左右移动，知道，对应的下一个值不等于k；
3. 返回j-i+1

## 参考代码

	class Solution:
    def GetNumberOfK(self, data, k):
        # write code here
        i,j=0,len(data)-1
        mid=(i+j)//2
        while(i<=j and data[mid]!=k):
            if(k>data[mid]):
                i=mid+1
                mid=(i+j)//2
            elif(k==data[mid]):
                break
            else:
                j=mid-1
                mid=(i+j)//2
        if(i>j):
            return 0
        i=j=mid
        while(i>0):
            if(data[i-1]==k):
                i-=1
            else:
                break
        while(j<len(data)-1):
            if(data[j+1]==k):
                j+=1
            else:
                break
        return j-i+1

	运行时间： 20 ms