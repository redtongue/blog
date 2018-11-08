---
title: 930.Binary Subarrays With Sum（和相同的二元子数组）
date: 2018-10-28 19:04:57
tags: [code]
categories: leetcode
---
## Description

In an array A of 0s and 1s, how many non-empty subarrays have sum S?

---

在由若干 0 和 1  组成的数组 A 中，有多少个和为 S 的非空子数组。

题目链接：[https://leetcode.com/problems/binary-subarrays-with-sum/](https://leetcode.com/problems/binary-subarrays-with-sum/ "https://leetcode.com/problems/binary-subarrays-with-sum/")

#### Difficulty: medium

<!-- more -->

### Example 1:

	Input: A = [1,0,1,0,1], S = 2
	Output: 4
	Explanation: 
	The 4 subarrays are bolded below:
	[1,0,1,0,1]
	[1,0,1,0,1]
	[1,0,1,0,1]
	[1,0,1,0,1]

### Note:

- A.length <= 30000
- 0 <= S <= A.length
- A[i] is either 0 or 1.

## 分析

1. 若是得到每个字串的和，时间复杂度为 $O(n^2)$ ,A的长度是30000，时间会超限；
2. 遍历A得到以每个位置结尾的字串（从头开始）的和，存入字典d中，key：字串和，value：满足key和的字串总数；
3. 遍历的同时计算满足要求的字串，1.当前字串和为S，s（满足要求的字串数目）加一，2.s加上字串和为当前字串和index与S的差值的字串数目；
4. 返回s。 

## 参考代码

	class Solution:
    def numSubarraysWithSum(self, A, S):
        d={}
        s=0
        index=0
        for i in range(len(A)):
            if(A[i]==1):
                index+=1
            if(index==S):
                s+=1
            if((index-S) in d):
                s+=d[index-S]
            
            if(index in d):
                d[index]+=1
            else:
                d[index]=1
        return s