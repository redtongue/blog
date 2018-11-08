---
title: 884.Uncommon Words from Two Sentences
date: 2018-08-13 15:42:22
tags: [code,Hash Table]
categories: leetcode
---
## Description

We are given two sentences A and B.  (A sentence is a string of space separated words.  Each word consists only of lowercase letters.)

A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

Return a list of all uncommon words. 

You may return the list in any order.

题目链接：[https://leetcode.com/problems/uncommon-words-from-two-sentences/description/](https://leetcode.com/problems/uncommon-words-from-two-sentences/description/ "https://leetcode.com/problems/uncommon-words-from-two-sentences/description/")

#### Difficulty: easy

<!-- more -->

### Example 1:

	Input: A = "this apple is sweet", B = "this apple is sour"
	Output: ["sweet","sour"]

### Example 2:

	Input: A = "apple apple", B = "banana"
	Output: ["banana"]
	

### Note:

- 0 <= A.length <= 200
- 0 <= B.length <= 200
- 0 <= A[i] <= 10^9
- A and B both contain only spaces and lowercase letters.

## 分析

1. 如果有一项出现两次或以上，那么一定不是Uncommon Words；
2. 遍历A+B，定义一个set存储遍历结果，若该项已经存在于set中，说明出现不止一次，从list中移出。

## 参考代码

	class Solution:
    def uncommonFromSentences(self, A, B):
        d=set()
        li=[]
        a=A.split()+B.split()
        for index in a:
            if(index in d):
                if(index in li):
                    li.remove(index)
            else:
                d.add(index)
                li.append(index)
        return li