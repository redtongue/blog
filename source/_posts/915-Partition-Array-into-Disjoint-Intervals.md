---
title: 915.Partition Array into Disjoint Intervals
date: 2018-10-01 17:14:50
tags: [code,Array]
categories: leetcode
---
## Description

Given an array A, partition it into two (contiguous) subarrays left and right so that:

- Every element in left is less than or equal to every element in right.
- left and right are non-empty.
- left has the smallest possible size.

Return the length of left after such a partitioning.  It is guaranteed that such a partitioning exists.

题目链接：[https://leetcode.com/problems/partition-array-into-disjoint-intervals/description/](https://leetcode.com/problems/partition-array-into-disjoint-intervals/description/ "https://leetcode.com/problems/partition-array-into-disjoint-intervals/description/")

#### Difficulty: medium

<!-- more -->

### Example 1:

	Input: [5,0,3,8,6]
	Output: 3
	Explanation: left = [5,0,3], right = [8,6]

### Example 2:

	Input: [1,1,1,0,6,12]
	Output: 4
	Explanation: left = [1,1,1,0], right = [6,12]


### Note:

- 2 <= A.length <= 30000
- 0 <= A[i] <= 10^6
- It is guaranteed there is at least one way to partition A as described.

## 分析

1. 定义ml为左边序列的最大值，mr为右边序列的最小值，mr初始值min(A)；
2. 循环遍历A，更新ml，mr，其中，若A[i]>mr，则不需要更新mr(这一步不做，会时间超限)，反之，mr=A[i+1:]
3. 若ml<=mr,则返回当前序号。

## 参考代码

	class Solution:
    def partitionDisjoint(self, A):
        ml=0
        index=0
        mr=min(A)
        for i in range(len(A)-1):
            ml=max(ml,A[i])
            if(A[i]==mr):
                mr=min(A[i+1:])
            if(ml<=mr):
                index=i+1
                return index


