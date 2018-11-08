---
title: 881.Boats to Save People
date: 2018-08-06 18:50:35
tags: [code,Two Pointers,Greedy]
categories: leetcode
---
## Description

The i-th person has weight people[i], and each boat can carry a maximum weight of limit.

Each boat carries at most 2 people at the same time, provided the sum of the weight of those people is at most limit.

Return the minimum number of boats to carry every given person.  (It is guaranteed each person can be carried by a boat.)

题目链接：[https://leetcode.com/problems/boats-to-save-people/description/](https://leetcode.com/problems/boats-to-save-people/description/ "https://leetcode.com/problems/boats-to-save-people/description/")

#### Difficulty: medium

<!-- more -->

### Example 1:

	Input: people = [1,2], limit = 3
	Output: 1
	Explanation: 1 boat (1, 2)

### Example 2:

	Input: people = [3,2,2,1], limit = 3
	Output: 3
	Explanation: 3 boats (1, 2), (2) and (3)

### Example 3:

	Input: people = [3,5,3,4], limit = 5
	Output: 4
	Explanation: 4 boats (3), (3), (4), (5)
	

### Note:

- 1 <= people.length <= 50000
- 1 <= people[i] <= limit <= 30000

## 分析

1. updating

## 参考代码

	class Solution:
    def numRescueBoats(self, people, limit):
        peo=sorted(people)
        length=len(peo)
        index=0
        i,j=0,length-1
        while(i<=j):
            index+=1
            if(peo[i]+peo[j]<=limit):
                i+=1
            j-=1
        return index
        