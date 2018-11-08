---
title: 931.Minimum Falling Path Sum（下降路径最小和）
date: 2018-10-28 19:07:25
tags: [code]
categories: leetcode
---
## Description

Given a square array of integers A, we want the minimum sum of a falling path through A.

A falling path starts at any element in the first row, and chooses one element from each row.  The next row's choice must be in a column that is different from the previous row's column by at most one.

---

给定一个方形整数数组 A，我们想要得到通过 A 的下降路径的最小和。

下降路径可以从第一行中的任何元素开始，并从每一行中选择一个元素。在下一行选择的元素和当前行所选元素最多相隔一列。

题目链接：[https://leetcode.com/problems/minimum-falling-path-sum/](https://leetcode.com/problems/minimum-falling-path-sum/ "https://leetcode.com/problems/minimum-falling-path-sum/")

#### Difficulty: medium

<!-- more -->

### Example 1:

	Input: [[1,2,3],[4,5,6],[7,8,9]]
	Output: 12
	Explanation: 
	The possible falling paths are:
	.[1,4,7], [1,4,8], [1,5,7], [1,5,8], [1,5,9]
	.[2,4,7], [2,4,8], [2,5,7], [2,5,8], [2,5,9], [2,6,8], [2,6,9]
	.[3,5,7], [3,5,8], [3,5,9], [3,6,8], [3,6,9]
	The falling path with the smallest sum is [1,4,7], so the answer is 12.

### Note:

- 1 <= A.length == A[0].length <= 100
- -100 <= A[i][j] <= 100

## 分析

1. 由题意知，从一行的一点到下一行，只有三种情况，当前列、当前列的前一列、当前列的后一列，由此反推，到达下一行的一点的上一点也只有三种情况，故由此可以分步得到以每个点结尾的最小路径和；
2. 定义tar存储每一行每个点结尾的最小路径和，其中长度是A的长度加2，补齐两端是为了在计算两端点路径时，也可以统一计算三个路径的最小值；
3. 返回最后一行对应点的最小路径和。

## 参考代码
	
	class Solution:
    def minFallingPathSum(self, A):
        tar=[0]*(len(A[0])+2)
        tar[0]=10000
        tar[-1]=10000
        for a in A:
            t=[0]*(len(A[0])+2)
            t[0]=10000
            t[-1]=10000
            for i in range(len(a)):
                t[i+1]=min(tar[i],tar[i+1],tar[i+2])+a[i]
            tar=t
        return min(tar[1:-1])
        