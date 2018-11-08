---
title: '[nowcoder]数组中的逆序对'
date: 2018-08-02 17:00:51
tags: [剑指Offer,code,数组]
categories: nowcoder
---

## 题目描述

在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。输入一个数组,求出这个数组中的逆序对的总数P。并将P对1000000007取模的结果输出。 即输出P%1000000007

题目链接： [https://www.nowcoder.com/practice/96bd6684e04a44eb80e6a68efc0ec6c5](https://www.nowcoder.com/practice/96bd6684e04a44eb80e6a68efc0ec6c5 "https://www.nowcoder.com/practice/96bd6684e04a44eb80e6a68efc0ec6c5")

<!-- more -->

### 输入描述

> 题目保证输入的数组中没有的相同的数字
数据范围：

> 对于%50的数据,size<=10^4

> 对于%75的数据,size<=10^5

> 对于%100的数据,size<=2*10^5

### 示例1
    输入： 1,2,3,4,5,6,7,0
	输出： 7


## 分析

1. 如果直接两边遍历比较，时间复杂度为$O(n^2)$,时间会超限；
2. 考虑利用时间复杂度为O(nlogn)的归并排序解决，归并排序的子步骤是将两部分的排好序的序列合并，且归并排序是稳定的不会导致计数重复；
3. 每次两部分合并时，若把后面的部分归并时，则该数字比前半部分的剩余序列都小，即逆序对数；
4. 复现归并排序算法，加入计算逆序部分，返回逆序对总数。

## 参考代码

	class Solution:
    def _inter(self,temp,data,low,high):
        if(low>=high):
            temp[low]=data[low]
            return 0
        mid=(low+high)//2
        left=self._inter(data,temp,low,mid)
        right=self._inter(data,temp,mid+1,high)
        count=0
        i,j=low,mid+1
        index=low
        while(i<=mid and j <=high):
            if(data[i]<=data[j]):
                temp[index]=data[i]
                i+=1
            else:
                temp[index]=data[j]
                j+=1
                count+=(mid-i+1)
            index+=1
        while(i<=mid):
            temp[index]=data[i]
            i+=1
            index+=1
        while(j<=high):
            temp[index]=data[j]
            j+=1
            index+=1
        return count+left+right
    def InversePairs(self, data):
        # write code here
        if(not data):
            return 0
        import copy
        temp = [i for i in data]
        return self._inter(temp,data,0,len(data)-1)%1000000007

	运行时间： 2179 ms