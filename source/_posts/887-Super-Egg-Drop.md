---
title: 887.Super Egg Drop
date: 2018-08-13 16:00:24
tags: [code,Math,Binary Search,Dynamic Programming]
categories: leetcode
---
## Description


You are given K eggs, and you have access to a building with N floors from 1 to N. 

Each egg is identical in function, and if an egg breaks, you cannot drop it again.

You know that there exists a floor F with 0 <= F <= N such that any egg dropped at a floor higher than F will break, and any egg dropped at or below floor F will not break.

Each move, you may take an egg (if you have an unbroken one) and drop it from any floor X (with 1 <= X <= N). 

Your goal is to know with certainty what the value of F is.

What is the minimum number of moves that you need to know with certainty what F is, regardless of the initial value of F?

题目链接：[https://leetcode.com/problems/super-egg-drop/description/](https://leetcode.com/problems/super-egg-drop/description/ "https://leetcode.com/problems/super-egg-drop/description/")

#### Difficulty: hard

<!-- more -->

### Example 1:

	Input: K = 1, N = 2
	Output: 2
	Explanation: 
	Drop the egg from floor 1.  If it breaks, we know with certainty that F = 0.
	Otherwise, drop the egg from floor 2.  If it breaks, we know with certainty that F = 1.
	If it didn't break, then we know with certainty F = 2.
	Hence, we needed 2 moves in the worst case to know what F is with certainty.

### Example 2:

	Input: K = 2, N = 6
	Output: 3

### Example 3:

	Input: K = 3, N = 14
	Output: 4
	

### Note:

- 1 <= K <= 100
- 1 <= N <= 10000

## 分析

1. 定义dp[i][j]表示j个鸡蛋i个move对应的楼层，若当前鸡蛋没破，对应的前一步是dp[i-1][j],若破了，对应的是dp[i-1][j-1],故dp[i][j]=dp[i-1][j-1]+dp[i-1][j]+1;
2. 初始化，dp[i][j]=0;
3. 动态计算dp[i][j]，直到dp[i][j]>=N,返回i。

## 参考代码

	class Solution:
    def superEggDrop(self, K, N):
        dp=[[0]*(K+1) for i in range(N+1)]
        dp[0][0]=0
        for i in range(1,N+1):
            dp[i][0]=0
            for j in range(1,K+1):
                dp[i][j] = dp[i-1][j]+dp[i-1][j-1]+1
                if(dp[i][j]>=N):
                    return i
        return N