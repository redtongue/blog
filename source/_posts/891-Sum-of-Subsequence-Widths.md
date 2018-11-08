---
title: 891.Sum of Subsequence Widths
date: 2018-08-20 22:44:38
tags: [code,Array,Math]
categories: leetcode
---
## Description

Given an array of integers A, consider all non-empty subsequences of A.

For any sequence S, let the width of S be the difference between the 
maximum and minimum element of S.

Return the sum of the widths of all subsequences of A. 

As the answer may be very large, return the answer modulo 10^9 + 7.

题目链接：[https://leetcode.com/problems/sum-of-subsequence-widths/description/](https://leetcode.com/problems/sum-of-subsequence-widths/description/ "https://leetcode.com/problems/sum-of-subsequence-widths/description/")

#### Difficulty: hard

<!-- more -->

### Example 1:

	Input: [2,1,3]

	Output: 6

	Explanation: Subsequences are [1], [2], [3], [2,1], [2,3], [1,3], [2,1,3].

	The corresponding widths are 0, 0, 0, 1, 1, 2, 2.

	The sum of these widths is 6.

### Note:

- 1 <= A.length <= 20000
- 1 <= A[i] <= 20000

## 分析

1. 将integers A排序
2. n=3时，形如A=[1,2,3],index=(4-1)*(3-1)=6
3. n=4时，形如A=[1,2,3,4],index=(8-1)*(4-1)+(4-2)*(3-2)=23
4. n=5时，形如A=[1,2,3,4,5],index=(16-1)*(5-1)+(8-2)*(4-2)=72
5. 总结规律如下
6. $$index=\sum_{i=0}^{length/2}{(2^{length-1-i}-2^i)*(A[length-1]-A[i])}$$

## 参考代码

	class Solution:
    def sumSubseqWidths(self, A):
        length=len(A)
        if(length==1):
            return 0
        if(length==2):
            return abs(A[0]-A[1])
        p1=length-1
        p2=0
        P1=2**(length-1)
        P2=2**0
        index=0
        A.sort()
        mod=10**9+7
        while(p1>p2):
            index+=((P1-P2)*(A[p1]-A[p2]))
            index%=mod
            p1-=1
            p2+=1
            P1//=2
            P2*=2
        return index

	64 / 64 test cases passed.
	Runtime: 1224 ms
