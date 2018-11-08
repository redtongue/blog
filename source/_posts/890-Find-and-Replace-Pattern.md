---
title: 890.Find and Replace Pattern
date: 2018-08-20 22:41:19
tags: [code,String]
categories: leetcode
---
## Description

You have a list of words and a pattern, and you want to know which words in words matches the pattern.

A word matches the pattern if there exists a permutation of letters p so that after replacing every letter x in the pattern with p(x), we get the desired word.

(Recall that a permutation of letters is a bijection from letters to letters: every letter maps to another letter, and no two letters map to the same letter.)

Return a list of the words in words that match the given pattern. 

You may return the answer in any order.

题目链接：[https://leetcode.com/problems/find-and-replace-pattern/description/](https://leetcode.com/problems/find-and-replace-pattern/description/ "https://leetcode.com/problems/find-and-replace-pattern/description/")

#### Difficulty: medium

<!-- more -->

### Example 1:

	Input: words = ["abc","deq","mee","aqq","dkd","ccc"], pattern = "abb"

	Output: ["mee","aqq"]

	Explanation: "mee" matches the pattern because there is a permutation {a -> m, b -> e, ...}.

	"ccc" does not match the pattern because {a -> c, b -> c, ...} is not a permutation,
	
	since a and b map to the same letter.

### Note:

- 1 <= words.length <= 50
- 1 <= pattern.length = words[i].length <= 20

## 分析

1. word与pattern匹配就是一种特殊的相等关系，每个字母是唯一的对应关系；
2. 注意，每个字母只能对应一个，所以，定义两个字典，分别存储key-value和value-key的对应；
3. 定义比较函数judge(a,b)，a='mee',b='aqq',生成两个字典，{m:a,e:q}和{a:m,q:e},如果相等返回True，反之False。

## 参考代码

	class Solution:
    def findAndReplacePattern(self, words, pattern):
        def judge(a,b):
            db={}
            da={}
            for i in range(len(a)):
                if(b[i] in db):
                    if(db[b[i]]!=a[i]):
                        return False
                else:
                    db[b[i]] = a[i]
                if(a[i] in da):
                    if(da[a[i]]!=b[i]):
                        return False
                else:
                    da[a[i]]=b[i]
            return True
        li=[]
        for word in words:
            if(judge(word,pattern)):
                li.append(word)
        return li

	46 / 46 test cases passed.
	Runtime: 60 ms

