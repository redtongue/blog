---
title: 949.Largest Time for Given Digits(给定数字能组成的最大时间)
date: 2018-12-02 21:21:27
tags: [code, Math]
categories: leetcode
---
## Description

Given an array of 4 digits, return the largest 24 hour time that can be made.

The smallest 24 hour time is 00:00, and the largest is 23:59.  Starting from 00:00, a time is larger if more time has elapsed since midnight.

Return the answer as a string of length 5.  If no valid time can be made, return an empty string.

---

给定一个由 4 位数字组成的数组，返回可以设置的符合 24 小时制的最大时间。

最小的 24 小时制时间是 00:00，而最大的是 23:59。从 00:00 （午夜）开始算起，过得越久，时间越大。

以长度为 5 的字符串返回答案。如果不能确定有效时间，则返回空字符串。

题目链接：[https://leetcode.com/problems/largest-time-for-given-digits/](https://leetcode.com/problems/largest-time-for-given-digits/ "https://leetcode.com/problems/largest-time-for-given-digits/")

#### Difficulty: easy

<!-- more -->

### Example 1:

	Input: [1,2,3,4]
	Output: "23:41"

### Example 2:

	Input: [5,5,5,5]
	Output: ""

### Note:

- A.length == 4
- 0 <= A[i] <= 9

## 分析

1. 直接暴力列出所有可能的时间，共有4*3*2*1=24中，判断合法时间，返回最大时间；
2. 合法时间的原则是：时间的小时要小于24，时间的分钟要小于60；
3. 遍历所有可能性，返回满足条件的最大时间；无满足条件，返回“”。

## 参考代码

	class Solution:
    def largestTimeFromDigits(self, A):
        if(sum(A)==0):
            return "00:00"
        li=["0","0"]
        for i in range(4):
            for j in range(4):
                for k in range(4):
                    for q in range(4):
                        if(i!=j and i!=k and i!=q and j!=k and j!=q and k!=q):
                            h=str(A[i])+str(A[j])
                            m=str(A[k])+str(A[q])
                            if(int(h)<24 and int(m) < 60):
                                if(int(h)>int(li[0]) or (int(h)==int(li[0]) and int(m) > int(li[1]))):
                                    li=[h,m]
        if((int(li[0])+int(li[1]))==0):
            return ""
        else:
            return li[0]+":"+li[1]
        