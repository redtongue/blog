---
title: 917.Reverse Only Letters
date: 2018-10-08 10:56:19
tags: [code]
categories: leetcode
---
## Description

Given a string S, return the "reversed" string where all characters that are not a letter stay in the same place, and all letters reverse their positions.

题目链接：[https://leetcode.com/problems/reverse-only-letters/](https://leetcode.com/problems/reverse-only-letters/ "https://leetcode.com/problems/reverse-only-letters/")

#### Difficulty: easy

<!-- more -->

### Example 1:

	Input: "ab-cd"
	Output: "dc-ba"

### Example 2:

	Input: "a-bC-dEf-ghIj"
	Output: "j-Ih-gfE-dCba"

### Example 3:

	Input: "Test1ng-Leet=code-Q!"
	Output: "Qedo1ct-eeLg=ntse-T!"

### Note:

- S.length <= 100
- 33 <= S[i].ASCIIcode <= 122 
- S doesn't contain \ or "

## 分析

1. updating

## 参考代码

	class Solution(object):
    def reverseOnlyLetters(self, S):
        letters = [c for c in S if c.isalpha()]
        ans = []
        for c in S:
            if c.isalpha():
                ans.append(letters.pop())
            else:
                ans.append(c)
        return "".join(ans)