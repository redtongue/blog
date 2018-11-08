---
title: 868.Binary Gap
date: 2018-07-16 11:31:03
tags: [code, Math]
categories: leetcode
---
## Description

Given a positive integer N, find and return the longest distance between two consecutive 1's in the binary representation of N.

If there aren't two consecutive 1's, return 0.

题目链接：[https://leetcode.com/problems/binary-gap/](https://leetcode.com/problems/binary-gap/ "https://leetcode.com/problems/binary-gap/")

#### Difficulty: easy

<!-- more -->

### Example 1:

	Input: 22
	Output: 2
	Explanation: 
	22 in binary is 0b10110.
	In the binary representation of 22, there are three ones, and two consecutive pairs of 1's.
	The first consecutive pair of 1's have distance 2.
	The second consecutive pair of 1's have distance 1.
	The answer is the largest of these two distances, which is 2.

### Example 2:

	Input: 5
	Output: 2
	Explanation: 
	5 in binary is 0b101.

### Example 3:

	Input: 6
	Output: 1
	Explanation: 
	6 in binary is 0b110.

### Example 4:

	Input: 8
	Output: 0
	Explanation: 
	8 in binary is 0b1000.
	There aren't any consecutive pairs of 1's in the binary representation of 8, so we return 0.

### Note:

- 1 <= N <= 10^9

## 分析

1. updating

## 参考代码

	class Solution:
    def binaryGap(self, N):
        judge=False
        index=0
        Max=0
        while(N > 0):
            if(N%2==1):
                if(judge):
                    Max=max(Max,index+1)
                index=0
                judge=True
            else:
                index += 1
            N = N//2
        return Max
        