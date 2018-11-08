---
title: 888.Fair candy Swap
date: 2018-08-20 22:32:58
tags: [code,Array]
categories: leetcode
---
## Description

Alice and Bob have candy bars of different sizes: A[i] is the size of the i-th bar of candy that Alice has, and B[j] is the size of the j-th bar of candy that Bob has.

Since they are friends, they would like to exchange one candy bar each so that after the exchange, they both have the same total amount of candy.  (The total amount of candy a person has is the sum of the sizes of candy bars they have.)

Return an integer array ans where ans[0] is the size of the candy bar that Alice must exchange, and ans[1] is the size of the candy bar that Bob must exchange.

If there are multiple answers, you may return any one of them.  It is guaranteed an answer exists.

题目链接：[https://leetcode.com/problems/fair-candy-swap/description/](https://leetcode.com/problems/fair-candy-swap/description/ "https://leetcode.com/problems/fair-candy-swap/description/")

#### Difficulty: easy

<!-- more -->

### Example 1:

	Input: A = [1,1], B = [2,2]

	Output: [1,2]

### Example 2:

	Input: A = [1,2], B = [2,3]

	Output: [1,2]

### Example 3:

	Input: A = [2], B = [1,3]

	Output: [2,3]

### Example 4:

	Input: A = [1,2,5], B = [2,4]

	Output: [5,4]

### Note:

- 1 <= A.length <= 10000
- 1 <= B.length <= 10000
- 1 <= A[i] <= 100000
- 1 <= B[i] <= 100000
- It is guaranteed that Alice and Bob have different total amounts of candy.
- It is guaranteed there exists an answer.

## 分析

1. 交换一个candy使得两个人的candy总数相等，只需要交换的两个candy的差值为两个人的candy的总和的差值的一半（index）即可；
2. 遍历A，存入set，为了搜索快；
3. 遍历B，每一项加上index在set中，即使所需交换的两个candy。

## 参考代码

	class Solution:
    def fairCandySwap(self, A, B):
        sumA=sum(A)
        sumB=sum(B)
        index=(sumB-sumA)//2
        bSet=set()
        for b in B:
            bSet.add(b)
        for i in A:
            if(i+index in bSet):
                return [i,i+index]
        return [0,0]
        
	75 / 75 test cases passed.
	Runtime: 76 ms
