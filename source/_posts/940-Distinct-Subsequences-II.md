---
title: 940.Distinct Subsequences II(不同的子序列 II)
date: 2018-11-11 12:06:45
tags: [code]
categories: leetcode
---
## Description

Given a string S, count the number of distinct, non-empty subsequences of S .

Since the result may be large, return the answer modulo 10^9 + 7.

---

给定一个字符串 S，计算 S 的不同非空子序列的个数。

因为结果可能很大，所以返回答案模 10^9 + 7.

题目链接：[https://leetcode.com/problems/distinct-subsequences-ii/](https://leetcode.com/problems/distinct-subsequences-ii/ "https://leetcode.com/problems/distinct-subsequences-ii/")

#### Difficulty: hard

<!-- more -->

### Example 1:

	Input: "abc"
	Output: 7
	Explanation: The 7 distinct subsequences are "a", "b", "c", "ab", "ac", "bc", and "abc".

### Example 2:

	Input: "aba"
	Output: 6
	Explanation: The 6 distinct subsequences are "a", "b", "ab", "ba", "aa" and "aba".

### Example 3:

	Input: "aaa"
	Output: 3
	Explanation: The 3 distinct subsequences are "a", "aa" and "aaa".

### Note:

- S contains only lowercase letters.
- 1 <= S.length <= 2000

## 分析

1. 分析得，以每个字母结尾的字串是上一个字串和加1（1是指只有该字母）；
2. 所以用D存储以每个字母结尾的字串和；
3. 遍历S，更新每个字母对应的以此结尾的字串和，用Sum记录所有的字串和；
4. 返回Sum。

## 参考代码
	
	class Solution:
    def distinctSubseqII(self, S):
        if(len(S)==1):
            return 1
        Sum=1
        old={}
        old[S[0]]=1
        for s in S[1:]:
            if(s in old):
                tar=old[s]
                old[s]=Sum+1
                Sum+=(Sum+1-tar)
            else:
                old[s]=Sum+1
                Sum*=2
                Sum+=1
            Sum=Sum%(10**9+7)
        return Sum