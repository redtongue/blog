---
title: 914.X of a Kind in a Deck of Cards
date: 2018-10-01 17:10:23
tags: [code,Array,Math]
categories: leetcode
---
## Description

In a deck of cards, each card has an integer written on it.

Return true if and only if you can choose X >= 2 such that it is possible to split the entire deck into 1 or more groups of cards, where:

- Each group has exactly X cards.
- All the cards in each group have the same integer.

题目链接：[https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/description/](https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/description/ "https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/description/")

#### Difficulty: easy

<!-- more -->

### Example 1:

	Input: [1,2,3,4,4,3,2,1]
	Output: true
	Explanation: Possible partition [1,1],[2,2],[3,3],[4,4]

### Example 2:

	Input: [1,1,1,2,2,2,3,3]
	Output: false
	Explanation: No possible partition.

### Example 3:

	Input: [1]
	Output: false
	Explanation: No possible partition.

### Example 4:

	Input: [1,1]
	Output: true
	Explanation: Possible partition [1,1]

### Example 5:

	Input: [1,1,2,2,2,2]
	Output: true
	Explanation: Possible partition [1,1],[2,2],[2,2]


### Note:

- 1 <= deck.length <= 10000
- 0 <= deck[i] < 10000

## 分析

1. 由题意知，若每个数字出现的次数都大于1，且次数都可以整除某一个数，则返回True，反之False；
2. 找到最小的出现次数m，若小于2，则返回False，能整除的数在[2，m]；
3. 循环，若存在某一个数i（[2，m]）是的每一个数出现的次数都可以整除i，则返回True；
4. 若没有，返回False。

## 参考代码

	class Solution:
    def hasGroupsSizeX(self, deck):
        dic={}
        for d in deck:
            if(d in dic):
                dic[d]+=1
            else:
                dic[d]=1
        m=10000
        for d in dic:
            m=min(dic[d],m)
            if(dic[d]==1):
                return False
        for i in range(2,m+1):
            for d in dic:
                if(dic[d]%i!=0):
                    break
            else:
                return True
        return False

        


