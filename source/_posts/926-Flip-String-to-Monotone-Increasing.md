---
title: 926.Flip String to Monotone Increasing（将字符串翻转到单调递增）
date: 2018-10-23 22:09:12
tags: [code]
categories: leetcode
---
## Description

A string of '0's and '1's is monotone increasing if it consists of some number of '0's (possibly 0), followed by some number of '1's (also possibly 0.)

We are given a string S of '0's and '1's, and we may flip any '0' to a '1' or a '1' to a '0'.

Return the minimum number of flips to make S monotone increasing.

---

如果一个由 '0' 和 '1' 组成的字符串，是以一些 '0'（可能没有 '0'）后面跟着一些 '1'（也可能没有 '1'）的形式组成的，那么该字符串是单调递增的。

我们给出一个由字符 '0' 和 '1' 组成的字符串 S，我们可以将任何 '0' 翻转为 '1' 或者将 '1' 翻转为 '0'。

返回使 S 单调递增的最小翻转次数。

题目链接：[https://leetcode.com/problems/flip-string-to-monotone-increasing/](https://leetcode.com/problems/flip-string-to-monotone-increasing/ "https://leetcode.com/problems/flip-string-to-monotone-increasing/")

#### Difficulty: medium

<!-- more -->

### Example 1:

	Input: "00110"
	Output: 1
	Explanation: We flip the last digit to get 00111.

### Example 2:

	Input: "010110"
	Output: 2
	Explanation: We flip to get 011111, or alternatively 000111.

### Example 3:

    Input: "00011000"
	Output: 2
	Explanation: We flip to get 00000000.

### Note:

- 1 <= S.length <= 20000
- S only consists of '0' and '1' characters.

## 分析

1. 由题意知，需要将字符串变为前半部分为0后半部分为1的最小变换次数；
2. 记录所有0和1出现的次数，变换次数初始化为其中的最小值；
3. 定义x为前半部分出现1的次数，y为后半部分出现0的次数，变换次数m等于x+y;
4. 遍历s，若当前位置为1则x+=1，反之y-=1，更新m的最小值；
5. 返回m。

## 参考代码
	
	class Solution:
    def minFlipsMonoIncr(self, S):
        s0=0
        s1=0
        for i in S:
            if(i=='0'):
                s0+=1
            else:
                s1+=1
        m=min(s0,s1)
        x1=0
        y0=s0
        for i in S:
            m=min(m,x1+y0)
            if(i=='1'):
                x1+=1
            else:
                y0-=1
        return m
        