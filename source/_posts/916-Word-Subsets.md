---
title: 916.Word Subsets
date: 2018-10-01 17:18:55
tags: [code,Array]
categories: leetcode
---
## Description

We are given two arrays A and B of words.  Each word is a string of lowercase letters.

Now, say that word b is a subset of word a if every letter in b occurs in a, including multiplicity.  For example, "wrr" is a subset of "warrior", but is not a subset of "world".

Now say a word a from A is universal if for every b in B, b is a subset of a. 

Return a list of all universal words in A.  You can return the words in any order.

题目链接：[https://leetcode.com/problems/word-subsets/description/](https://leetcode.com/problems/word-subsets/description/ "https://leetcode.com/problems/word-subsets/description/")

#### Difficulty: hard

<!-- more -->

### Example 1:

	Input: A = ["amazon","apple","facebook","google","leetcode"], B = ["e","o"]
	Output: ["facebook","google","leetcode"]

### Example 2:

	Input: A = ["amazon","apple","facebook","google","leetcode"], B = ["l","e"]
	Output: ["apple","google","leetcode"]

### Example 3:

	Input: A = ["amazon","apple","facebook","google","leetcode"], B = ["e","oo"]
	Output: ["facebook","google"]

### Example 4:

	Input: A = ["amazon","apple","facebook","google","leetcode"], B = ["lo","eo"]
	Output: ["google","leetcode"]

### Example 5:

	Input: A = ["amazon","apple","facebook","google","leetcode"], B = ["ec","oc","ceo"]
	Output: ["facebook","leetcode"]


### Note:

- 1 <= A.length, B.length <= 10000
- 1 <= A[i].length, B[i].length <= 10
- A[i] and B[i] consist only of lowercase letters.
- All words in A[i] are unique: there isn't i != j with A[i] == A[j].

## 分析

1. 如题所定义的包含关系可以转化为，字符串A,B，若B中的每一个字母出现的次数都小于等于A中字母出现的次数，则A包含B；
2. 对于B中每一个字符串，统计对应字母出现次数最多的次数，存在dicb中；
3. 对于A中每个字符串a，计算a中每个字母出现的次数，存在dica中；
4. 若dica包含dicb，则a是满足要求的字符串。

## 参考代码

	class Solution:
    def wordSubsets(self, A, B):
        from collections import defaultdict
        dicb=defaultdict(lambda:0)
        for b in B:
            d=defaultdict(lambda:0)
            for tar in b:
                d[tar]+=1
            for tar in d:
                dicb[tar]=max(dicb[tar],d[tar])
        li=[]
        #print(dicb)
        for a in A:
            dica=defaultdict(lambda:0)
            for tar in a:
                dica[tar]+=1
            #print(dica)
            if(all(dica[c]>=dicb[c] for c in dicb)):
                li.append(a)
        return li
        


