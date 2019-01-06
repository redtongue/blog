---
title: 953.Verifying an Alien Dictionary(验证外星语词典)
date: 2018-12-09 12:02:57
tags: [code, Hash Table]
categories: leetcode
---
## Description

In an alien language, surprisingly they also use english lowercase letters, but possibly in a different `order`. The `order` of the alphabet is some permutation of lowercase letters.

Given a sequence of `words` written in the alien language, and the `order` of the alphabet, return `true` if and only if the given `words` are sorted lexicographicaly in this alien language.

---

某种外星语也使用英文小写字母，但可能顺序 `order` 不同。字母表的顺序（`order`）是一些小写字母的排列。

给定一组用外星语书写的单词 `words`，以及其字母表的顺序 `order`，只有当给定的单词在这种外星语中按字典序排列时，返回 `true`；否则，返回 `false`。

题目链接：[https://leetcode.com/problems/verifying-an-alien-dictionary/](https://leetcode.com/problems/verifying-an-alien-dictionary/ "https://leetcode.com/problems/verifying-an-alien-dictionary/")

#### Difficulty: easy

<!-- more -->

### Example 1:

	Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
	Output: true
	Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.

### Example 2:

	Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
	Output: false
	Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.

### Example 3:

	Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
	Output: false
	Explanation: The first three characters "app" match, and the second string is shorter (in size.) According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character (More info).

### Note:

- 1 <= words.length <= 100
- 1 <= words[i].length <= 20
- order.length == 26
- All characters in words[i] and order are english lowercase letters.

## 分析

- 定义一个判断符合‘order’顺序的函数judge，遍历w1，w2，若w1在大于w2，返回False，若w1在小于w2，返回True，反之继续；
- 将‘order’存入字典，保存其序号，用于judge中判断；
- 遍历‘words’，用judge判断，若存在逆序，返回False；
- 返回True。

## 参考代码

	class Solution:
    def isAlienSorted(self, words, order):
        def judge(w1,w2,o):
            i=0
            while(i<len(w1) and i < len(w2)):
                if(o[w1[i]] < o[w2[i]]):
                    return True
                elif(o[w1[i]]>o[w2[i]]):
                    return False
                else:
                    i+=1
            if(i<len(w1)):
                return False
            else:
                return True
        o={}
        for i in range(len(order)):
            o[order[i]]=i
        for i in range(len(words)-1):
            if(not judge(words[i],words[i+1],o)):
                return False
        return True

        