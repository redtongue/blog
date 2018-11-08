---
title: 923.3Sum With Multiplicity（三数之和的多种可能）
date: 2018-10-14 18:30:20
tags: [code,Array]
categories: leetcode
---
## Description

Given an integer array A, and an integer target, return the number of tuples i, j, k  such that i < j < k and A[i] + A[j] + A[k] == target.

As the answer can be very large, return it modulo 10^9 + 7.

---

给定一个整数数组 A，以及一个整数 target 作为目标值，返回满足 i < j < k 且 A[i] + A[j] + A[k] == target 的元组 i, j, k 的数量。

由于结果会非常大，请返回 结果除以 10^9 + 7 的余数。

题目链接：[https://leetcode.com/problems/3sum-with-multiplicity/description/](https://leetcode.com/problems/3sum-with-multiplicity/description/ "https://leetcode.com/problems/3sum-with-multiplicity/description/")

#### Difficulty: medium

<!-- more -->

### Example 1:

	Input: A = [1,1,2,2,3,3,4,4,5,5], target = 8
	Output: 20
	Explanation: 
	Enumerating by the values (A[i], A[j], A[k]):
	(1, 2, 5) occurs 8 times;
	(1, 3, 4) occurs 8 times;
	(2, 2, 4) occurs 2 times;
	(2, 3, 3) occurs 2 times.

### Example 2:

	Input: A = [1,1,2,2,2,2], target = 5
	Output: 12
	Explanation: 
	A[i] = 1, A[j] = A[k] = 2 occurs 12 times:
	We choose one 1 from [1,1] in 2 ways,
	and two 2s from [2,2,2,2] in 6 ways.

### Note:

- 3 <= A.length <= 3000
- 0 <= A[i] <= 100
- 0 <= target <= 300

## 分析

1. 如果直接在A中选取三个数字，然后计算和是否为target的话，时间复杂度为 $O(n^3)$
2. 对A进行压缩计数，得到{1:2,2:2,3:3,4:2,5:2}(如例一)
3. 从[1,2,3,4,5]中选取三个数，但是每个数被选中的次数不能超过它在A中出现的次数（在judge函数中实现，judge(a,b)相当于从b个中选取a个的可能性）
4. 三层循环得到三个数字，如和为target，则返回所有数字出现的可能性的乘积，即当前数字的可能的组合个数；
5. 反之，继续；
6. 返回所有满足条件的组合总数。

## 参考代码

	class Solution:
    def threeSumMulti(self, A, target):
        import collections
        count=collections.Counter(A)
        s=0
        def judge(a,b):
            if(a>b):
                return 0
            s=1
            for i in range(b,a,-1):
                s*=i
            for i in range(2,b-a+1):
                s//=i
            return s
        li=list(count.keys())
        for i in range(len(li)):
            for j in range(i,len(li)):
                for k in range(j,len(li)):
                    index1=li[i]
                    index2=li[j]
                    index3=li[k]
                    if(index1+index2+index3!=target):
                        continue
                    countIndex=collections.Counter([index1,index2,index3])
                    curr = 1
                    for index in countIndex:
                        curr*=judge(countIndex[index],count[index])
                    s+=curr
                    s%=(10**9+7)
        return s
        