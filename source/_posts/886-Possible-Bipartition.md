---
title: 886.Possible Bipartition
date: 2018-08-13 15:53:33
tags: [code,Depth-first Search]
categories: leetcode
---
## Description

Given a set of N people (numbered 1, 2, ..., N), we would like to split everyone into two groups of any size.

Each person may dislike some other people, and they should not go into the same group. 

Formally, if dislikes[i] = [a, b], it means it is not allowed to put the people numbered a and b into the same group.

Return true if and only if it is possible to split everyone into two groups in this way.

题目链接：[https://leetcode.com/problems/possible-bipartition/description/](https://leetcode.com/problems/possible-bipartition/description/ "https://leetcode.com/problems/possible-bipartition/description/")

#### Difficulty: medium

<!-- more -->

### Example 1:

	Input: N = 4, dislikes = [[1,2],[1,3],[2,4]]
	Output: true
	Explanation: group1 [1,4], group2 [2,3]

### Example 2:

	Input: N = 3, dislikes = [[1,2],[1,3],[2,3]]
	Output: false

### Example 3:

	Input: N = 5, dislikes = [[1,2],[2,3],[3,4],[4,5],[1,5]]
	Output: false
	

### Note:

- 1 <= N <= 2000
- 0 <= dislikes.length <= 10000
- 1 <= dislikes[i][j] <= N
- A dislikes[i][0] < dislikes[i][1]
- There does not exist i != j for which dislikes[i] == dislikes[j].

## 分析

1. 对每一个[u,v]存储到graph中，代表每个人不喜欢的人的集合；
2. 定义字典color存储每个人的类别，0，1两类；
3. 深度搜索dfs对于每一个node，如果存在于color中，则返回对应值是否等于当前c值；反之，将当前c值存到color，并对所有不喜欢的人dfs，c取反（对1去异或）
4. 对所与人dfs，有false则返回false，反之true。

## 参考代码

	class Solution:
    def possibleBipartition(self, N, dislikes):
        import collections
        graph = collections.defaultdict(list)
        for u, v in dislikes:
            graph[u].append(v)
            graph[v].append(u)

        color = {}
        def dfs(node, c = 0):
            if node in color:
                return color[node] == c
            color[node] = c
            return all(dfs(nei, c ^ 1) for nei in graph[node])
        
        return all(dfs(node)
                   for node in range(1, N+1)
                   if node not in color)