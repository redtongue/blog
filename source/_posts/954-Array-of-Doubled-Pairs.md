---
title: 954.Array of Doubled Pairs(二倍数对数组)
date: 2018-12-09 12:08:13
tags: [code, Array, Hash Table]
categories: leetcode
---
## Description

Given an array of integers `A` with even length, return `true` if and only if it is possible to reorder it such that `A[2 * i + 1] = 2 * A[2 * i]` for every `0 <= i < len(A) / 2`.

---

给定一个长度为偶数的整数数组 `A`，只有对 `A` 进行重组后可以满足 “对于每个 `0 <= i < len(A) / 2`，都有 `A[2 * i + 1] = 2 * A[2 * i]`” 时，返回 `true`；否则，返回 `false`。

题目链接：[https://leetcode.com/problems/array-of-doubled-pairs/](https://leetcode.com/problems/array-of-doubled-pairs/ "https://leetcode.com/problems/array-of-doubled-pairs/")

#### Difficulty: medium

<!-- more -->

### Example 1:

	Input: [3,1,3,6]
	Output: false

### Example 2:

	Input: [2,1,2,6]
	Output: false

### Example 3:

	Input: [4,-2,2,-4]
	Output: true
	Explanation: We can take two groups, [-2,-4] and [2,4] to form [-2,-4,2,4] or [2,4,-2,-4].

### Example 4:

	Input: [1,2,4,16,8,4]
	Output: false

### Note:

- 0 <= A.length <= 30000
- A.length is even
- -100000 <= A[i] <= 100000

## 分析

- 先将A排序；
- 分为两种情况，负数和正数；
- 负数：遍历，若遍历完lii，当前数加入到lii，反之，比较，若当前数a小于lii[ii]的一半，加入到lii，若等于，ii后移，若大于，返回False；
- 正数：遍历，若遍历完li，当前数加入到li，反之，比较，若当前数a小于li[i]的两倍，加入到li，若等于，i后移，若大于，返回False；
- 若lii和li为空，返回True；
- 返回False。

## 参考代码

	class Solution:
    def canReorderDoubled(self, A):
        A.sort()
        li=[]
        i=0
        lii=[]
        ii=0
        for a in A:
            if(a<0):
                if(ii==len(lii)):
                    lii.append(a)
                else:
                    if(a<lii[ii]/2):
                        lii.append(a)
                    elif(a==lii[ii]/2):
                        ii+=1
                    else:
                        return False
                continue
            if(ii!=len(lii)):
                return False
            if(i==len(li)):
                li.append(a)
            else:
                if(a<2*li[i]):
                    li.append(a)
                elif(a==2*li[i]):
                    i+=1
                else:
                    return False
        if(i==len(li) and ii==len(lii)):
            return True
        return False
        