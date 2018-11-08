---
title: 903.Valid Permutaions for DI Sequence
date: 2018-09-10 11:41:01
tags: [code,Array]
categories: leetcode
---
## Description

We are given S, a length n string of characters from the set {'D', 'I'}. (These letters stand for "decreasing" and "increasing".)

A valid permutation is a permutation P[0], P[1], ..., P[n] of integers {0, 1, ..., n}, such that for all i:

- If S[i] == 'D', then P[i] > P[i+1], and;

- If S[i] == 'I', then P[i] < P[i+1].

How many valid permutations are there?  Since the answer may be large, return your answer modulo 10^9 + 7.

题目链接：[https://leetcode.com/problems/valid-permutations-for-di-sequence/description/](https://leetcode.com/problems/valid-permutations-for-di-sequence/description/ "https://leetcode.com/problems/valid-permutations-for-di-sequence/description/")

#### Difficulty: hard

<!-- more -->

### Example 1:

	Input: "DID"
	Output: 5
	Explanation: 
	The 5 valid permutations of (0, 1, 2, 3) are:
	(1, 0, 3, 2)
	(2, 0, 3, 1)
	(2, 1, 3, 0)
	(3, 0, 2, 1)
	(3, 1, 2, 0)


### Note:

- 1 <= S.length <= 200
- S consists only of characters from the set {'D', 'I'}.

## 分析

1. 题意：每次可以交换第index（小于等于K）个字母到最后一个，可以交换任意次，是的结果为最小字典顺序；
2. 当K>=2时，相当于时间复杂度为$O(n_2)$的排序算法，当然可能小于$O(n_2)$，最后结果一定是字典顺序；大致过程：每次移到最后相当于字符串循环，每次将待排序字符放在第一位，循环后面的字符串，直到待排序字符排好序，加入循环字符串，以此类推；
3. 当K==1时，相当于首尾相连，找到最小字典顺序字串，简单做法：字符串复制两份，遍历一半，截取length长度的字串，找出最小字典顺序字串。

## 参考代码

	


