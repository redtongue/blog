---
title: 941.Valid Mountain Array(有效的山脉数组)
date: 2018-11-18 18:53:23
tags: [code, Array]
categories: leetcode
---
## Description

Given an array A of integers, return true if and only if it is a valid mountain array.

Recall that A is a mountain array if and only if:

- A.length >= 3
- There exists some i with 0 < i < A.length - 1 such that:
    - A[0] < A[1] < ... A[i-1] < A[i]
    - A[i] > A[i+1] > ... > A[B.length - 1]

---

给定一个整数数组 A，如果它是有效的山脉数组就返回 true，否则返回 false。

让我们回顾一下，如果 A 满足下述条件，那么它是一个山脉数组：

- A.length >= 3
- 在 0 < i < A.length - 1 条件下，存在 i 使得：
	- A[0] < A[1] < ... A[i-1] < A[i]
	- A[i] > A[i+1] > ... > A[B.length - 1]

题目链接：[https://leetcode.com/problems/valid-mountain-array/](https://leetcode.com/problems/valid-mountain-array/ "https://leetcode.com/problems/valid-mountain-array/")

#### Difficulty: easy

<!-- more -->

### Example 1:

	Input: [2,1]
	Output: false

### Example 2:

	Input: [3,5,5]
	Output: false

### Example 3:

	Input: [0,3,2,1]
	Output: true

### Note:

- 0 <= A.length <= 10000
- 0 <= A[i] <= 10000 

## 分析

1. 山脉数组就是先增后减，单调增单调减都是合法的，长度小于3的也不合法；
2. 当时的代码使用一个判断量judge=True，遍历A，如果开始下降了，更改judge=False；
3. 若judge为False，序列是不降的，返回False；
4. 遍历结束，若judge是True，返回False，即序列单调增。

## 参考代码

	class Solution:
    def validMountainArray(self, A):
        if(len(A)<3):
            return False
        index=A[0]
        judge=True
        if(A[1]<A[0]):
            return False
        for tar in A[1:]:
            if(judge):
                if(tar>index):
                    index=tar
                elif(tar<index):
                    index=tar
                    judge=False
                else:
                    return False
            else:
                if(tar<index):
                    index=tar
                else:
                    return False
        if(judge):
            return False
        return True
        