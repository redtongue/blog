---
title: 869.Reordered Power of 2
date: 2018-07-16 11:31:30
tags: [code, Math]
categories: leetcode
---
## Description

Starting with a positive integer N, we reorder the digits in any order (including the original order) such that the leading digit is not zero.

Return true if and only if we can do this in a way such that the resulting number is a power of 2.

题目链接：[https://leetcode.com/problems/reordered-power-of-2/](https://leetcode.com/problems/reordered-power-of-2/ "https://leetcode.com/problems/reordered-power-of-2/")

#### Difficulty: medium

<!-- more -->

### Example 1:

	Input: 1
	Output: true

### Example 2:

	Input: 10
	Output: false

### Example 3:

	Input: 16
	Output: true

### Example 4:

	Input: 24
	Output: false

### Example 5:

	Input: 46
	Output: true

### Note:

- 1 <= N <= 10^9

## 分析

1. updating

## 参考代码

	class Solution:
    def reorderedPowerOf2(self, N):
        li=[]
        for i in range(30):
            li.append(str(2**i))
        def judge(a,b):
            if(len(a) == len(b)):
                A=list(a)
                B=list(b)
                for index in A:
                    if(index in B):
                        B.remove(index)
                    else:
                        return False
                return True
            return False
        for i in range(len(li)):
            if(judge(li[i],str(N))):
                return True
        return False
        