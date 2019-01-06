---
title: 948.Bag of Tokens(令牌放置)
date: 2018-11-25 12:08:45
tags: [code, Greedy]
categories: leetcode
---
## Description

You have an initial power P, an initial score of 0 points, and a bag of tokens.

Each token can be used at most once, has a value token[i], and has potentially two ways to use it.

- If we have at least token[i] power, we may play the token face up, losing token[i] power, and gaining 1 point.
-	If we have at least 1 point, we may play the token face down, gaining token[i] power, and losing 1 point.

Return the largest number of points we can have after playing any number of tokens.

---

你的初始能量为 P，初始分数为 0，只有一包令牌。

令牌的值为 token[i]，每个令牌最多只能使用一次，可能的两种使用方法如下：

- 如果你至少有 token[i] 点能量，可以将令牌置为正面朝上，失去 token[i] 点能量，并得到 1 分。
- 如果我们至少有 1 分，可以将令牌置为反面朝上，获得 token[i] 点能量，并失去 1 分。

在使用任意数量的令牌后，返回我们可以得到的最大分数。

题目链接：[https://leetcode.com/problems/bag-of-tokens/](https://leetcode.com/problems/bag-of-tokens/ "https://leetcode.com/problems/bag-of-tokens/")

#### Difficulty: medium

<!-- more -->

### Example 1:

	Input: tokens = [100], P = 50
	Output: 0

### Example 2:

	Input: tokens = [100,200], P = 150
	Output: 1

### Example 3:

	Input: tokens = [100,200,300,400], P = 200
	Output: 2

### Note:

- tokens.length <= 1000
- 0 <= tokens[i] < 10000
- 0 <= P < 10000

## 分析

1. 得分原则：能量够的情况下，尽量得分；反正尽量获取更多能量；
2. 将tokens排序，若剩余能量不小于最小token的情况下，将令牌置为正面朝上，得一分；反之若是分数大于零，将最大能量的令牌置为反面朝上，减一分；记录当前得分，以及中间过程中出现过的最大得分；
3. 操作完所有的token或者不能再操作token之时，返回最大得分。

## 参考代码

	class Solution:
    def bagOfTokensScore(self, tokens, P):
        tokens.sort()
        i,j=0,len(tokens)-1
        points=0
        power=P
        m_p=0
        while(i<=j):
            if(power>=tokens[i]):
                points+=1
                power-=tokens[i]
                i+=1
                m_p=max(m_p,points)
            elif(points>0):
                points-=1
                power+=tokens[j]
                j-=1
            else:
                break
        return m_p