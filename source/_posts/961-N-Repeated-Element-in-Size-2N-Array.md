---
title: 961.N-Repeated Element in Size 2N Array（重复 N 次的元素）
date: 2018-12-23 20:53:28
tags: [code, Hash Table]
categories: leetcode
---
## Description

In a array `A` of size `2N`, there are `N+1` unique elements, and exactly one of these elements is repeated N times.

Return the element repeated `N` times.

---

在大小为 2N 的数组 A 中有 N+1 个不同的元素，其中有一个元素重复了 N 次。

返回重复了 N 次的那个元素。

题目链接：[https://leetcode.com/problems/n-repeated-element-in-size-2n-array](https://leetcode.com/problems/n-repeated-element-in-size-2n-array "https://leetcode.com/problems/n-repeated-element-in-size-2n-array")

#### Difficulty: easy

<!-- more -->

### Example 1:

	Input: [1,2,3,3]
	Output: 3

### Example 2:

	Input: [2,1,2,5,3,2]
	Output: 2

### Example 3:

	Input: [5,1,5,2,5,3,5,4]
	Output: 5

### Note:

- 4 <= A.length <= 10000
- 0 <= A[i] < 10000
- A.length is even

## 分析

- updating

## 参考代码

	class Solution:
    def repeatedNTimes(self, A):
        D=set()
        for a in A:
            if(a not in D):
                D.add(a)
            else:
                return a
        return