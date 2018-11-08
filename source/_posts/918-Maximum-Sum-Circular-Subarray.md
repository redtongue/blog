---
title: 918.Maximum Sum Circular Subarray
date: 2018-10-08 10:57:35
tags: [code]
categories: leetcode
---
## Description

Given a circular array C of integers represented by A, find the maximum possible sum of a non-empty subarray of C.

Here, a circular array means the end of the array connects to the beginning of the array.  (Formally, C[i] = A[i] when 0 <= i < A.length, and C[i+A.length] = C[i] when i >= 0.)

Also, a subarray may only include each element of the fixed buffer A at most once.  (Formally, for a subarray C[i], C[i+1], ..., C[j], there does not exist i <= k1, k2 <= j with k1 % A.length = k2 % A.length.)

题目链接：[https://leetcode.com/problems/maximum-sum-circular-subarray/](https://leetcode.com/problems/maximum-sum-circular-subarray/ "https://leetcode.com/problems/maximum-sum-circular-subarray/")

#### Difficulty: medium

<!-- more -->

### Example 1:

	Input: [1,-2,3,-2]
	Output: 3
	Explanation: Subarray [3] has maximum sum 3

### Example 2:

	Input: [5,-3,5]
	Output: 10
	Explanation: Subarray [5,5] has maximum sum 5 + 5 = 10

### Example 3:

	Input: [3,-1,2,-1]
	Output: 4
	Explanation: Subarray [2,-1,3] has maximum sum 2 + (-1) + 3 = 4

### Example 4:

	Input: [3,-2,2,-3]
	Output: 3
	Explanation: Subarray [3] and [3,-2,2] both have maximum sum 3

### Example 5:

	Input: [-2,-3,-1]
	Output: -1
	Explanation: Subarray [-1] has maximum sum -1


### Note:

- -30000 <= A[i] <= 30000
- 1 <= A.length <= 30000

## 分析

1. updating

## 参考代码

	class Solution(object):
    def maxSubarraySumCircular(self, A):
        N = len(A)

        ans = cur = None
        for x in A:
            cur = x + max(cur, 0)
            ans = max(ans, cur)

        # ans is the answer for 1-interval subarrays.
        # Now, let's consider all 2-interval subarrays.
        # For each i, we want to know
        # the maximum of sum(A[j:]) with j >= i+2

        # rightsums[i] = sum(A[i:])
        rightsums = [None] * N
        rightsums[-1] = A[-1]
        for i in xrange(N-2, -1, -1):
            rightsums[i] = rightsums[i+1] + A[i]

        # maxright[i] = max_{j >= i} rightsums[j]
        maxright = [None] * N
        maxright[-1] = rightsums[-1]
        for i in xrange(N-2, -1, -1):
            maxright[i] = max(maxright[i+1], rightsums[i])

        leftsum = 0
        for i in xrange(N-2):
            leftsum += A[i]
            ans = max(ans, leftsum + maxright[i+2])
        return ans