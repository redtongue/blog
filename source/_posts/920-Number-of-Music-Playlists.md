---
title: 920.Number of Music Playlists
date: 2018-10-08 10:58:35
tags: [code]
categories: leetcode
---
## Description

Your music player contains N different songs and she wants to listen to L (not necessarily different) songs during your trip.  You create a playlist so that:

- Every song is played at least once
- A song can only be played again only if K other songs have been played

Return the number of possible playlists.  As the answer can be very large, return it modulo 10^9 + 7.

题目链接：[https://leetcode.com/problems/number-of-music-playlists/](https://leetcode.com/problems/number-of-music-playlists/ "https://leetcode.com/problems/number-of-music-playlists/")

#### Difficulty: hard

<!-- more -->

### Example 1:

	Input: N = 3, L = 3, K = 1
	Output: 6
	Explanation: There are 6 possible playlists. [1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1].

### Example 2:

	Input: N = 2, L = 3, K = 0
	Output: 6
	Explanation: There are 6 possible playlists. [1, 1, 2], [1, 2, 1], [2, 1, 1], [2, 2, 1], [2, 1, 2], [1, 2, 2]

### Example 3:

    Input: N = 2, L = 3, K = 1
    Output: 2
	Explanation: There are 2 possible playlists. [1, 2, 1], [2, 1, 2]


### Note:

- 0 <= K < N <= L <= 100

## 分析

1. updating

## 参考代码

	from functools import lru_cache

	class Solution:
    def numMusicPlaylists(self, N, L, K):
        @lru_cache(None)
        def dp(i, j):
            if i == 0:
                return +(j == 0)
            ans = dp(i-1, j-1) * (N-j+1)
            ans += dp(i-1, j) * max(j-K, 0)
            return ans % (10**9+7)

        return dp(L, N)