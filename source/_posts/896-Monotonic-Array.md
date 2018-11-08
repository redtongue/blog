---
title: 896.Monotonic Array
date: 2018-09-02 11:29:30
tags: [code,Array]
categories: leetcode
---
## Description

An array is monotonic if it is either monotone increasing or monotone decreasing.

An array A is monotone increasing if for all i <= j, A[i] <= A[j].  An array A is monotone decreasing if for all i <= j, A[i] >= A[j].

Return true if and only if the given array A is monotonic.

题目链接：[https://leetcode.com/problems/monotonic-array/description/](https://leetcode.com/problems/monotonic-array/description/ "https://leetcode.com/problems/monotonic-array/description/")

#### Difficulty: easy

<!-- more -->

### Example 1:

	Input: [1,2,2,3]
	Output: true

### Example 2:

	Input: [6,5,4,4]
	Output: true

### Example 3:

	Input: [1,3,2]
	Output: false

### Example 4:

	Input: [1,2,4,5]
	Output: true

### Example 5:

	Input: [1,1,1]
	Output: true

### Note:

- 1 <= A.length <= 50000
- 100000 <= A[i] <= 100000

## 分析

1. 判断数组是否是递增或者递减的，定义判断量judge，judge=0初始化，judge=1递增，judge=-1递减，遍历数组；
2. 如果judge=0：当前数大于前一个数，judge=1，如果当前数小于前一个数，judge=-1；
3. 如果judge=1：如果当前数小于前一个数，返回False；
4. 如果judge=-1：如果当前数大于前一个数，返回False；
5. 遍历结束，返回True。

## 参考代码

	class Solution:
    def isMonotonic(self, A):
        index = A[0]
        judge=0
        for i in range(1,len(A)):
            if(judge==0):
                if(A[i]>index):
                    judge=1
                if(A[i]<index):
                    judge=-1
                index=A[i]
            elif(judge==1):
                if(A[i]<index):
                    return False
                index=A[i]
            else:
                if(A[i]>index):
                    return False
                index=A[i]
        return True
	
	366 / 366 test cases passed.
	Runtime: 160 ms