---
title: 947.Most Stonees Removed with Same Row or Column(移除最多的同行或同列石头)
date: 2018-11-25 12:06:07
tags: [code, Depth-first Search, Union Find]
categories: leetcode
---
## Description

On a 2D plane, we place stones at some integer coordinate points.  Each coordinate point may have at most one stone.

Now, a move consists of removing a stone that shares a column or row with another stone on the grid.

What is the largest possible number of moves we can make?

---

在二维平面上，我们将石头放置在一些整数坐标点上。每个坐标点上最多只能有一块石头。

现在，move 操作将会移除与网格上的另一块石头共享一列或一行的石头。

我们最多能执行多少次 move 操作？

题目链接：[https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/](https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/ "https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/")

#### Difficulty: hard

<!-- more -->

### Example 1:

	Input: stones = [[0,0],[0,1],[1,0],[1,2],[2,1],[2,2]]
	Output: 5

### Example 2:

	Input: stones = [[0,0],[0,2],[1,1],[2,0],[2,2]]
	Output: 3

### Example 3:

	Input: stones = [[0,0]]
	Output: 0

### Note:

- 1 <= stones.length <= 1000
- 0 <= stones[i][j] < 10000

## 分析

1. 根据题意，所有的操作次数等于所有点数减去所有区域块数；
2. 区域块的划分原则：将横坐标或纵坐标相同的点，划分到同一个区域；
3. 用Dict_x和Dict_y存储所有点坐标的，key是横坐标（或纵坐标），value是该横坐标（或纵坐标）对应的所有点的纵坐标（或横坐标）；
4. 定义DFS，遍历某一点的相邻点（横坐标或纵坐标相同），从Dict_x和Dict_y中移出，以此得到区域块数；
5. 返回操作总次数。

## 参考代码

	class Solution:
    def removeStones(self, stones):
        import collections
        Dict_x=collections.defaultdict(list)
        Dict_y=collections.defaultdict(list)
        for stone in stones:
            Dict_x[stone[0]].append(stone[1])
            Dict_y[stone[1]].append(stone[0])
        s=0
        def dfs(stone):
            x,y=stone
            for tar in Dict_x[x]:
                Dict_x[x].remove(tar)
                dfs([x,tar])
            for tar in Dict_y[y]:
                Dict_y[y].remove(tar)
                dfs([tar,y])
        for stone in stones:
            if(stone[1] in Dict_x[stone[0]]):
                s+=1
                dfs(stone)
        return len(stones)-s
        