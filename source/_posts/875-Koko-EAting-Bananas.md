---
title: 875.Koko EAting Bananas
date: 2018-07-23 11:14:28
tags: [code, Binary Search]
categories: leetcode
---
## Description

Koko loves to eat bananas.  There are N piles of bananas, the i-th pile has piles[i] bananas.  The guards have gone and will come back in H hours.

Koko can decide her bananas-per-hour eating speed of K.  Each hour, she chooses some pile of bananas, and eats K bananas from that pile.  If the pile has less than K bananas, she eats all of them instead, and won't eat any more bananas during this hour.

Koko likes to eat slowly, but still wants to finish eating all the bananas before the guards come back.

Return the minimum integer K such that she can eat all the bananas within H hours.

题目链接：[https://leetcode.com/problems/koko-eating-bananas/](https://leetcode.com/problems/koko-eating-bananas/ "https://leetcode.com/problems/koko-eating-bananas/")

#### Difficulty: medium

<!-- more -->

### Example 1:

	Input: piles = [3,6,7,11], H = 8
	Output: 4

### Example 2:

    Input: piles = [30,11,23,4,20], H = 5
    Output: 30

### Example 3:

    Input: piles = [30,11,23,4,20], H = 6
	Output: 23


### Note:

- 1 <= piles.length <= 10^4
- piles.length <= H <= 10^9
- 1 <= piles[i] <= 10^9

## 分析

1. updating

## 参考代码

	class Solution:
    def minEatingSpeed(self, piles, H):
        def judge(index):
            return sum((p-1)//index +1 for p in piles) <=H
        l,h=1,max(piles)
        while(l<h):
            middle=(l+h)//2
            if(not judge(middle)):
                l=middle+1
            else:
                h=middle
        return h
        