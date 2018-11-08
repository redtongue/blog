---
title: 870.Advantage Shuffle
date: 2018-07-16 11:31:55
tags: [code, Array, Greedy]
categories: leetcode
---
## Description

Given two arrays A and B of equal size, the advantage of A with respect to B is the number of indices i for which A[i] > B[i].

Return any permutation of A that maximizes its advantage with respect to B.

题目链接：[https://leetcode.com/problems/advantage-shuffle/](https://leetcode.com/problems/advantage-shuffle/ "https://leetcode.com/problems/advantage-shuffle/")

#### Difficulty: medium

<!-- more -->

### Example 1:

	Input: A = [2,7,11,15], B = [1,10,4,11]
	Output: [2,11,7,15]

### Example 2:

	Input: A = [12,24,8,32], B = [13,25,32,11]
	Output: [24,32,8,12]

### Note:

- 1 <= A.length = B.length <= 10000
- 0 <= A[i] <= 10^9
- 0 <= B[i] <= 10^9

## 分析

1. updating

## 参考代码

	class Solution:
    def advantageCount(self, A, B):
        s_a=sorted(A)
        s_b=sorted(B)
        assigned={b:[] for b in B}
        li=[]
        j=0
        for a in s_a:
            if(a > s_b[j]):
                assigned[s_b[j]].append(a)
                j += 1
            else:
                li.append(a)
        
        return [assigned[b].pop() if assigned[b] else li.pop() for b in B]
        