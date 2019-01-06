---
title: 942.DI String Match(增减字符串匹配)
date: 2018-11-18 18:53:46
tags: [code, Math]
categories: leetcode
---
## Description

Given a string S that only contains "I" (increase) or "D" (decrease), let N = S.length.

Return any permutation A of [0, 1, ..., N] such that for all i = 0, ..., N-1:

- If S[i] == "I", then A[i] < A[i+1]
- If S[i] == "D", then A[i] > A[i+1]

---

给定只含 "I"（增大）或 "D"（减小）的字符串 S ，令 N = S.length。

返回 [0, 1, ..., N] 的任意排列 A 使得对于所有 i = 0, ..., N-1，都有：

- 如果 S[i] == "I"，那么 A[i] < A[i+1]
- 如果 S[i] == "D"，那么 A[i] > A[i+1]

题目链接：[https://leetcode.com/problems/di-string-match/](https://leetcode.com/problems/di-string-match/ "https://leetcode.com/problems/di-string-match/")

#### Difficulty: easy

<!-- more -->

### Example 1:

	Input: "IDID"
	Output: [0,4,1,3,2]

### Example 2:

	Input: "III"
	Output: [0,1,2,3]

### Example 3:

	Input: "DDI"
	Output: [3,2,0,1]

### Note:

- 1 <= S.length <= 10000
- S only contains characters "I" or "D".

## 分析

1. 如题意所示，只需要返回一个满足要求的增减字符串；
2. 那么其中一个满足条件的情况是，每一个位置的数字v是[0,1,...,N]中第D个（D是DI序列中D的数量）；
3. 按照增减规律，当前位置的数字的前面有D个后面有I个（D，I分别是DI序列中D，I的数量）；
4. 逐步求得每个位置的数字。

## 参考代码

	class Solution:
    def diStringMatch(self, S):
        I=0
        D=0
        for s in S:
            if(s=='I'):
                I+=1
            else:
                D+=1
        li=[i for i in range(len(S)+1)]
        tar=[li[D]]
        li.remove(li[D])
        for s in S:
            if(s=='I'):
                I-=1
            else:
                D-=1
            tar.append(li[D])
            li.remove(li[D])
        return tar
        