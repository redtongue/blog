---
title: 956.Tallest Billboard
date: 2018-12-09 12:18:43
tags: [code, Dynamic Programming]
categories: leetcode
---
## Description

You are installing a billboard and want it to have the largest height.  The billboard will have two steel supports, one on each side.  Each steel support must be an equal height.

You have a collection of `rods` which can be welded together.  For example, if you have rods of lengths 1, 2, and 3, you can weld them together to make a support of length 6.

Return the largest possible height of your billboard installation.  If you cannot support the billboard, return 0.

---

你正在安装一个广告牌，并希望它高度最大。这块广告牌将有两个钢制支架，两边各一个。每个钢支架的高度必须相等。

你有一堆可以焊接在一起的钢筋 `rods`。举个例子，如果钢筋的长度为 1、2 和 3，则可以将它们焊接在一起形成长度为 6 的支架。

返回广告牌的最大可能安装高度。如果没法安装广告牌，请返回 0。

题目链接：[https://leetcode.com/problems/tallest-billboard/](https://leetcode.com/problems/tallest-billboard/ "https://leetcode.com/problems/tallest-billboard/")

#### Difficulty: hard

<!-- more -->

### Example 1:

	Input: [1,2,3,6]
	Output: 6
	Explanation: We have two disjoint subsets {1,2,3} and {6}, which have the same sum = 6.

### Example 2:

	Input: [1,2,3,4,5,6]	
	Output: 10
	Explanation: We have two disjoint subsets {2,3,5} and {4,6}, which have the same sum = 10.

### Example 3:

	Input: [1,2]
	Output: 0
	Explanation: The billboard cannot be supported, so we return 0.

### Note:

- 0 <= rods.length <= 20
- 1 <= rods[i] <= 1000
- The sum of rods is at most 5000.

## 分析

- updating（Solution）

## 参考代码

	from functools import lru_cache
	class Solution:
    def tallestBillboard(self, rods):
        @lru_cache(None)
        def dp(i, s):
            if i == len(rods):
                return 0 if s == 0 else float('-inf')
            return max(dp(i + 1, s),
                       dp(i + 1, s - rods[i]),
                       dp(i + 1, s + rods[i]) + rods[i])

        return dp(0, 0)
