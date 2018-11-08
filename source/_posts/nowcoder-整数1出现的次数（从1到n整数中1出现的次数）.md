---
title: '[nowcoder]整数1出现的次数（从1到n整数中1出现的次数）'
date: 2018-08-02 15:33:08
tags: [剑指Offer,code]
categories: nowcoder
---

## 题目描述

求出1~13的整数中1出现的次数,并算出100~1300的整数中1出现的次数？为此他特别数了一下1~13中包含1的数字有1、10、11、12、13因此共出现6次,但是对于后面问题他就没辙了。ACMer希望你们帮帮他,并把问题更加普遍化,可以很快的求出任意非负整数区间中1出现的次数（从1 到 n 中1出现的次数）。

题目链接： [https://www.nowcoder.com/practice/bd7f978302044eee894445e244c7eee6](https://www.nowcoder.com/practice/bd7f978302044eee894445e244c7eee6 "https://www.nowcoder.com/practice/bd7f978302044eee894445e244c7eee6")

<!-- more -->

## 分析

1. 1-10之间1出现10次，11-100之间1出现了19次（个位九次，十位九次，百位一次），一次类推；
2. 但是本题的测试用例比较小，如下暴力解法，也通过了，直接计算每个数中1的个数；
3. 建议总结上面的规律。

## 参考代码

	class Solution:
    def NumberOf1Between1AndN_Solution(self, n):
        # write code here
        s=0
        for index in range(1,n+1):
            while(index>0):
                if(index%10==1):
                    s+=1
                index/=10
        return s

	运行时间： 36 ms