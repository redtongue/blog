---
title: 878.Nth Magical Number
date: 2018-07-30 21:40:30
tags: [code,Math,Binary Search]
categories: leetcode
---
## Description

A positive integer is magical if it is divisible by either A or B.

Return the N-th magical number.  Since the answer may be very large, return it modulo 10^9 + 7.

题目链接：[https://leetcode.com/problems/nth-magical-number/](https://leetcode.com/problems/nth-magical-number/ "https://leetcode.com/problems/nth-magical-number/")

#### Difficulty: hard

<!-- more -->

### Example 1:

	Input: N = 1, A = 2, B = 3
	Output: 2

### Example 2:

	Input: N = 4, A = 2, B = 3
	Output: 6

### Example 3:

	Input: N = 5, A = 2, B = 4
	Output: 10

### Example 4:

	Input: N = 3, A = 6, B = 4
	Output: 8

### Note:

- 1 <= N <= 10^9
- 2 <= A <= 40000
- 2 <= B <= 40000

## 分析

1. updating

## 参考代码

	class Solution:
    def nthMagicalNumber(self, N, A, B):
        def getMiniMul(x,y):
            a=b=min(x,y)
            while(True):
                if(a%x==0 and a%y==0):
                    return a
                a+=b
        if(A==B):
             return (A*N)%(10**9+7)
        M=getMiniMul(A,B)
        length=int(M/A+M/B-(M%A==0 and M%B==0))
        index=(N-1)%length+1
        a=int(index*B/(A+B))
        b=int(index*A/(A+B))
        target=min(A*(a+1),B*(b+1))
        index=(N-1)//length*M+target
        return index if index < (10**9+7) else index%(10**9+7)