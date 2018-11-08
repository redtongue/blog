---
title: 893.Groups of Special-Equivalent Strings
date: 2018-08-27 21:31:37
tags: [code,String]
categories: leetcode
---
## Description

You are given an array A of strings.

Two strings S and T are special-equivalent if after any number of moves, S == T.

A move consists of choosing two indices i and j with i % 2 == j % 2, and swapping S[i] with S[j].

Now, a group of special-equivalent strings from A is a non-empty subset S of A such that any string not in S is not special-equivalent with any string in S.

Return the number of groups of special-equivalent strings from A.

题目链接：[https://leetcode.com/problems/groups-of-special-equivalent-strings/description/](https://leetcode.com/problems/groups-of-special-equivalent-strings/description/ "https://leetcode.com/problems/groups-of-special-equivalent-strings/description/")

#### Difficulty: easy

<!-- more -->

### Example 1:

    Input: ["a","b","c","a","c","c"]
    Output: 3
	Explanation: 3 groups ["a","a"], ["b"], ["c","c","c"]

### Example 2:

    Input: ["aa","bb","ab","ba"]
    Output: 4
	Explanation: 4 groups ["aa"], ["bb"], ["ab"], ["ba"]

### Example 3:

    Input: ["abc","acb","bac","bca","cab","cba"]
    Output: 3
	Explanation: 3 groups ["abc","cba"], ["acb","bca"], ["bac","cab"]

### Example 4:

    Input: ["abcd","cdab","adcb","cbad"]
    Output: 1
	Explanation: 1 group ["abcd","cdab","adcb","cbad"]

### Note

- 1 <= A.length <= 1000
- 1 <= A[i].length <= 20
- All A[i] have the same length.
- All A[i] consist of only lowercase letters.

## 分析

1. 两个字符串special-equivalent，代表着一个字符串的奇数位置的字符经过任意次换位置和偶数位置的字符经过任意次换位置，两个字符串相等
2. 经过任意次变换相等，也就是在奇数和偶数位置上的字符总和一直，那么一定可以经过任意次互换位置便可以字符串相等。
3. 考虑包含奇数和偶数位置上的字符的特殊编码，即相应字符的个数（a-z,A-Z）,编码个数即groups数


## 参考代码

    def count(A):
            ans = [0] * 52
            for i, letter in enumerate(A):
                ans[ord(letter) - ord('a') + 26 * (i%2)] += 1
            return tuple(ans)

        return len({count(word) for word in A})

	34 / 34 test cases passed.
	Runtime: 52 ms

## 错误分析
刚开始做这道题的时候，也是类似于编码，但是返回的是两个set

	def judge(s1):
            a1=set()
            a2=set()
            for i in range(len(s1)):
                if(i%2==0):
                    a1.add(s1[i])
                else:
                    a2.add(s1[i])
            return [a1,a2]

但是没有像Solution中的那样返回一个元祖，可以在后面把结果放在dict中，导致的结果就是时间超限。


    