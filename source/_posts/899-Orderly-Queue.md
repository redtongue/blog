---
title: 899.Orderly Queue
date: 2018-09-02 11:44:12
tags: [code,Array]
categories: leetcode
---
## Description

A string S of lowercase letters is given.  Then, we may make any number of moves.

In each move, we choose one of the first K letters (starting from the left), remove it, and place it at the end of the string.

Return the lexicographically smallest string we could have after any number of moves.

题目链接：[https://leetcode.com/problems/orderly-queue/description/](https://leetcode.com/problems/orderly-queue/description/ "https://leetcode.com/problems/orderly-queue/description/")

#### Difficulty: hard

<!-- more -->

### Example 1:

	Input: S = "cba", K = 1
	Output: "acb"
	Explanation: 
	In the first move, we move the 1st character ("c") to the end, obtaining the string "bac".
	In the second move, we move the 1st character ("b") to the end, obtaining the final result "acb".

### Example 2:

	Input: S = "baaca", K = 3
	Output: "aaabc"
	Explanation: 
	In the first move, we move the 1st character ("b") to the end, obtaining the string "aacab".
	In the second move, we move the 3rd character ("c") to the end, obtaining the final result "aaabc".


### Note:

- 1 <= K <= S.length <= 1000
- S consists of lowercase letters only.

## 分析

1. 题意：每次可以交换第index（小于等于K）个字母到最后一个，可以交换任意次，是的结果为最小字典顺序；
2. 当K>=2时，相当于时间复杂度为$O(n_2)$的排序算法，当然可能小于$O(n_2)$，最后结果一定是字典顺序；大致过程：每次移到最后相当于字符串循环，每次将待排序字符放在第一位，循环后面的字符串，直到待排序字符排好序，加入循环字符串，以此类推；
3. 当K==1时，相当于首尾相连，找到最小字典顺序字串，简单做法：字符串复制两份，遍历一半，截取length长度的字串，找出最小字典顺序字串。

## 参考代码

	class Solution:
    def orderlyQueue(self, S, K):
        if(K>1):
            return ''.join(sorted(S))
        s=S+S
        target=S
        for i in range(1,len(S)+1):
            if(s[i:i+len(S)]<target):
                target=s[i:i+len(S)]
        return target
