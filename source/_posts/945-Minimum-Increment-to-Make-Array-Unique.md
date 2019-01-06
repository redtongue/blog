---
title: 945.Minimum Increment to Make Array Unique(使数组唯一的最小增量)
date: 2018-11-25 11:58:47
tags: [code, Array]
categories: leetcode
---
## Description

Given an array of integers A, a move consists of choosing any A[i], and incrementing it by 1.

Return the least number of moves to make every value in A unique.

---

给定整数数组 A，每次 move 操作将会选择任意 A[i]，并将其递增 1。

返回使 A 中的每个值都是唯一的最少操作次数。

题目链接：[https://leetcode.com/problems/minimum-increment-to-make-array-unique/](https://leetcode.com/problems/minimum-increment-to-make-array-unique/ "https://leetcode.com/problems/minimum-increment-to-make-array-unique/")

#### Difficulty: medium

<!-- more -->

### Example 1:

	Input: [1,2,2]
	Output: 1
	Explanation:  After 1 move, the array could be [1, 2, 3].

### Example 2:

	Input: [3,2,1,2,1,7]
	Output: 6
	Explanation:  After 6 moves, the array could be [3, 4, 1, 2, 5, 7].
	It can be shown with 5 or less moves that it is impossible for the array to have all unique values.

### Note:

- 0 <= A.length <= 40000
- 0 <= A[i] < 40000

## 分析

1. 根据题意是将数组中重复的数字调整（增加）到数组中不存在的数，返回增加的次数（每次增加1）；
2. 将数组A排序，依次遍历，若当前数字比前一个大，则继续；
3. 反之，调整当前数字到比前一个数字大（排序数组中调整是加1）；
4. 记录所有调整操作的次数，返回。

## 参考代码

	class Solution:
    def minIncrementForUnique(self, A):
        A.sort()
        s=0
        index=0
        for a in A:
            if(a<index):
                s+=(index-a)
                index+=1
            else:
                index=a+1
        return s