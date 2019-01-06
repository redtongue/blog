---
title: 962.Maximum Width Ramp(最大宽度坡)
date: 2018-12-23 20:57:30
tags: [code, Array]
categories: leetcode
---
## Description

Given an array `A` of integers, a ramp is a tuple `(i, j)` for which `i < j` and `A[i] <= A[j]`.  The width of such a ramp is `j - i`.

Find the maximum width of a ramp in `A`.  If one doesn't exist, return 0.

---

给定一个整数数组 A，坡是元组 (i, j)，其中  i < j 且 A[i] <= A[j]。这样的坡的宽度为 j - i。

找出 A 中的坡的最大宽度，如果不存在，返回 0 。

题目链接：[https://leetcode.com/problems/maximum-width-ramp/](https://leetcode.com/problems/maximum-width-ramp/ "https://leetcode.com/problems/maximum-width-ramp/")

#### Difficulty: medium

<!-- more -->

### Example 1:

	Input: [6,0,8,2,1,5]
	Output: 4
	Explanation: 
	The maximum width ramp is achieved at (i, j) = (1, 5): A[1] = 0 and A[5] = 5.

### Example 2:

	Input: [9,8,1,0,1,9,4,0,4,1]
	Output: 7
	Explanation: 
	The maximum width ramp is achieved at (i, j) = (2, 9): A[2] = 1 and A[9] = 1.

### Note:

- 2 <= A.length <= 50000
- 0 <= A[i] <= 50000

## 分析

- updating（Solution）

## 参考代码

	class Solution(object):
    def maxWidthRamp(self, A):
        ans = 0
        m = float('inf')
        for i in sorted(range(len(A)), key = A.__getitem__):
            ans = max(ans, i - m)
            m = min(m, i)
        return ans

