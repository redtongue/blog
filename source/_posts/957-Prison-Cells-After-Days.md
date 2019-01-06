---
title: 957.Prison Cells After Days（N 天后的牢房）
date: 2018-12-19 22:03:51
tags: [code, Hash Table]
categories: leetcode
---
## Description

There are 8 prison cells in a row, and each cell is either occupied or vacant.

Each day, whether the cell is occupied or vacant changes according to the following rules:

- If a cell has two adjacent neighbors that are both occupied or both vacant, then the cell becomes occupied.
- Otherwise, it becomes vacant.

(Note that because the prison is a row, the first and the last cells in the row can't have two adjacent neighbors.)

We describe the current state of the prison in the following way: 
`cells[i] == 1` if the i-th cell is occupied, else `cells[i] == 0`.

Given the initial state of the prison, return the state of the prison after `N` days (and `N` such changes described above.)

---

8 间牢房排成一排，每间牢房不是有人住就是空着。

每天，无论牢房是被占用或空置，都会根据以下规则进行更改：

如果一间牢房的两个相邻的房间都被占用或都是空的，那么该牢房就会被占用。
否则，它就会被空置。
（请注意，由于监狱中的牢房排成一行，所以行中的第一个和最后一个房间无法有两个相邻的房间。）

我们用以下方式描述监狱的当前状态：如果第 `i` 间牢房被占用，则 `cell[i]==1`，否则 `cell[i]==0`。

根据监狱的初始状态，在 `N` 天后返回监狱的状况（和上述 `N` 种变化）。

题目链接：[https://leetcode.com/problems/prison-cells-after-n-days/](https://leetcode.com/problems/prison-cells-after-n-days/ "https://leetcode.com/problems/prison-cells-after-n-days/")

#### Difficulty: medium

<!-- more -->

### Example 1:

	Input: cells = [0,1,0,1,1,0,0,1], N = 7
	Output: [0,0,1,1,0,0,0,0]
	Explanation: 
	The following table summarizes the state of the prison on each day:
	Day 0: [0, 1, 0, 1, 1, 0, 0, 1]
	Day 1: [0, 1, 1, 0, 0, 0, 0, 0]
	Day 2: [0, 0, 0, 0, 1, 1, 1, 0]
	Day 3: [0, 1, 1, 0, 0, 1, 0, 0]
	Day 4: [0, 0, 0, 0, 0, 1, 0, 0]
	Day 5: [0, 1, 1, 1, 0, 1, 0, 0]
	Day 6: [0, 0, 1, 0, 1, 1, 0, 0]
	Day 7: [0, 0, 1, 1, 0, 0, 0, 0]

### Example 2:

	Input: cells = [1,0,0,1,0,0,1,0], N = 1000000000
	Output: [0,0,1,1,1,1,1,0]

### Note:

- cells.length == 8
- cells[i] is in {0, 1}
- 1 <= N <= 10^9

## 分析

- updating（Solution）

## 参考代码

	class Solution(object):
    def prisonAfterNDays(self, cells, N):
        def nextday(cells):
            return [int(i > 0 and i < 7 and cells[i-1] == cells[i+1])
                    for i in xrange(8)]

        seen = {}
        while N > 0:
            c = tuple(cells)
            if c in seen:
                N %= seen[c] - N
            seen[c] = N

            if N >= 1:
                N -= 1
                cells = nextday(cells)

        return cells