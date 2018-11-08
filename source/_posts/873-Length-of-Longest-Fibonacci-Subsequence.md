---
title: 873.Length of Longest Fibonacci Subsequence
date: 2018-07-23 11:13:37
tags: [code, Array, Dynamic Programming]
categories: leetcode
---
## Description

A sequence X_1, X_2, ..., X_n is fibonacci-like if:

- n >= 3
- X_i + X_{i+1} = X_{i+2} for all i + 2 <= n

Given a strictly increasing array A of positive integers forming a sequence, find the length of the longest fibonacci-like subsequence of A.  If one does not exist, return 0.

(Recall that a subsequence is derived from another sequence A by deleting any number of elements (including none) from A, without changing the order of the remaining elements.  For example, [3, 5, 8] is a subsequence of [3, 4, 5, 6, 7, 8].)

题目链接：[https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/](https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/"https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/")

#### Difficulty: medium

<!-- more -->

### Example 1:

	Input: [1,2,3,4,5,6,7,8]
	Output: 5
	Explanation:
	The longest subsequence that is fibonacci-like: [1,2,3,5,8].

### Example 2:

	Input: [1,3,7,11,12,14,18]
	Output: 3
	Explanation:
	The longest subsequence that is fibonacci-like:
	[1,11,12], [3,11,14] or [7,11,18].

### Note:

- 3 <= A.length <= 1000
- 1 <= A[0] < A[1] < ... < A[A.length - 1] <= 10^9
- (The time limit has been reduced by 50% for submissions in Java, C, and C++.)

## 分析

1. updating

## 参考代码

	class Solution:
    def lenLongestFibSubseq(self, A):
        length=len(A)
        S=0
        index=set(A)
        for i in range(length-1):
            for j in range(i+1,length):
                a=A[i]
                b=A[j]
                s=2
                while a+b in index:
                    ii=a+b
                    a=b
                    b=ii
                    s+=1
                S=max(S,s)
        return S if S>2 else 0
        