---
title: 898.Bitwise ORs of Subarrays
date: 2018-09-02 11:40:46
tags: [code,Array]
categories: leetcode
---
## Description

We have an array A of non-negative integers.

For every (contiguous) subarray B = [A[i], A[i+1], ..., A[j]] (with i <= j), we take the bitwise OR of all the elements in B, obtaining a result A[i] | A[i+1] | ... | A[j].

Return the number of possible results.  (Results that occur more than once are only counted once in the final answer.)

题目链接：[https://leetcode.com/problems/bitwise-ors-of-subarrays/description/](https://leetcode.com/problems/bitwise-ors-of-subarrays/description/ "https://leetcode.com/problems/bitwise-ors-of-subarrays/description/")

#### Difficulty: medium

<!-- more -->

### Example 1:

	Input: [0]
	Output: 1
	Explanation: 
	There is only one possible result: 0.

### Example 2:

	Input: [1,1,2]
	Output: 3
	Explanation: 
	The possible subarrays are [1], [1], [2], [1, 1], [1, 2], [1, 1, 2].
	These yield the results 1, 1, 2, 1, 3, 3.
	There are 3 unique values, so the answer is 3.

### Example 3:

	Input: [1,2,4]
	Output: 6
	Explanation: 
	The possible results are 1, 2, 3, 4, 6, and 7.

### Note:

- 1 <= A.length <= 50000
- 0 <= A[i] <= 10^9

## 分析

1. 动态规划：遍历数组，记录以每一个数为结尾的子数组的结果，存在set中；
2. 将当前数与前一个数的结果的取或和本身，存储aSet（set）中；
3. aSet的长度即使所有结果的可能数。

## 参考代码

	class Solution:
    def subarrayBitwiseORs(self, A):
        index =A[0]
        aSet=set()
        judge=set()
        judge.add(index)
        aSet.add(index)
        for i in range(1,len(A)):
            _judge=set()
            for j in judge:
                aSet.add(A[i])
                _judge.add(A[i])
                aSet.add(j | A[i])
                _judge.add(j | A[i])
            judge=_judge
        return len(aSet)

	83 / 83 test cases passed.
	Runtime: 1712 ms
