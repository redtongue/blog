---
title: 922.Sort Array By Parity II（按奇偶排序数组 II）
date: 2018-10-14 18:26:32
tags: [code,Array]
categories: leetcode
---
## Description

Given an array A of non-negative integers, half of the integers in A are odd, and half of the integers are even.

Sort the array so that whenever A[i] is odd, i is odd; and whenever A[i] is even, i is even.

You may return any answer array that satisfies this condition.

---

给定一个非负整数数组 A， A 中一半整数是奇数，一半整数是偶数。

对数组进行排序，以便当 A[i] 为奇数时，i 也是奇数；当 A[i] 为偶数时， i 也是偶数。

你可以返回任何满足上述条件的数组作为答案。

题目链接：[https://leetcode.com/problems/sort-array-by-parity-ii/description/](https://leetcode.com/problems/sort-array-by-parity-ii/description/ "https://leetcode.com/problems/sort-array-by-parity-ii/description/")

#### Difficulty: easy

<!-- more -->

### Example 1:

	Input: [4,2,5,7]
	Output: [4,5,2,7]
	Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.

### Note:

- 2 <= A.length <= 20000
- A.length % 2 == 0
- 0 <= A[i] <= 1000

## 分析

1. 由题意知，是为了使得list中每个数与对应的下标的奇偶性一致；
2. 遍历list，如当前位置的数与下标的奇偶性一致，则继续；
3. 反之，往后寻找一个数字的奇偶性与当前下标的奇偶性一致的数，交换两个数的位置；
4. 小改进：往后找的时候，去找数字的奇偶性与它对应的下标奇偶性不一致的数字，减少后续比较的次数，代码中是当时做的时候写的，没有体现这一点，但是也AC了。

## 参考代码

	class Solution:
    def sortArrayByParityII(self, A):
        for i in range(len(A)):
            j=i+1
            if((A[i]%2)==(i%2)):
                continue
            while(j<len(A)):
                if((A[j]%2)==(i%2)):
                    A[i],A[j]=A[j],A[i]
                    break
                j+=1
        return A
        