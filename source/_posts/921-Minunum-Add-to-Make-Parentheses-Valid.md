---
title: 921.Minunum Add to Make Parentheses Valid（使括号有效的最少添加）
date: 2018-10-14 18:22:13
tags: [code]
categories: leetcode
---
## Description

Given a string S of '(' and ')' parentheses, we add the minimum number of parentheses ( '(' or ')', and in any positions ) so that the resulting parentheses string is valid.

Formally, a parentheses string is valid if and only if:

- It is the empty string, or
- It can be written as AB (A concatenated with B), where A and B are valid strings, or
- It can be written as (A), where A is a valid string.

Given a parentheses string, return the minimum number of parentheses we must add to make the resulting string valid.

---

给定一个由 '(' 和 ')' 括号组成的字符串 S，我们需要添加最少的括号（ '(' 或是 ')'，可以在任何位置），以使得到的括号字符串有效。

从形式上讲，只有满足下面几点之一，括号字符串才是有效的：

- 它是一个空字符串，或者
- 它可以被写成 AB （A 与 B 连接）, 其中 A 和 B 都是有效字符串，或者
- 它可以被写作 (A)，其中 A 是有效字符串。

给定一个括号字符串，返回为使结果字符串有效而必须添加的最少括号数。

题目链接：[https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/description/](https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/description/ "https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/description/")

#### Difficulty: medium

<!-- more -->

### Example 1:

	Input: "())"
	Output: 1

### Example 2:

	Input: "((("
	Output: 3

### Example 3:

	Input: "()"
	Output: 0

### Example 4:

	Input: "()))(("
	Output: 4

### Note:

- S.length <= 1000
- S only consists of '(' and ')' characters.

## 分析

1. 括号匹配问题，如果“（”先出现，则后面后出现的“）”可以将前面的一个“（”抵消；
2. 但是“）”先出现，则无法抵消；
3. 遍历输入字符串，index记录“（”的个数，若出现“）”，index减一，若index等于零，则不合法括号数s加一；
4. 最后返回index+s。

## 参考代码

	class Solution:
    def minAddToMakeValid(self, S):
        index=0
        s=0
        for i in range(len(S)):
            if(S[i]=='('):
                index+=1
            else:
                if(index!=0):
                    index-=1
                else:
                    s+=1
        return s+index
        