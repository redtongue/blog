---
title: 892.Surface Area of 3D Shapes
date: 2018-08-27 21:07:06
tags: [code,Math,Geometry]
categories: leetcode
---
## Description

On a N * N grid, we place some 1 * 1 * 1 cubes.

Each value v = grid[i][j] represents a tower of v cubes placed on top of grid cell (i, j).

Return the total surface area of the resulting shapes.

题目链接：[https://leetcode.com/problems/surface-area-of-3d-shapes/description/](https://leetcode.com/problems/surface-area-of-3d-shapes/description/ "https://leetcode.com/problems/surface-area-of-3d-shapes/description/")

#### Difficulty: easy

<!-- more -->

### Example 1:

    Input: [[2]]
    Output: 10

### Example 2:

    Input: [[1,2],[3,4]]
    Output: 34

### Example 3:

    Input: [[1,0],[0,2]]
    Output: 16

### Example 4:

    Input: [[1,1,1],[1,0,1],[1,1,1]]
    Output: 32

### Example 5:

    Input: [[2,2,2],[2,1,2],[2,2,2]]
    Output: 46

### Note

- 1 <= N <= 50
- 0 <= grid[i][j] <= 50

## 分析

1. 对于每一个立方体，由六个面，在整个立方体集合中贡献最大表面积为6；
2. 如果上面有立方体则减一，如果下面有立方体则减一，以此类推（包含上下左右前后六个面）；
3. 因为N和grid[i][j]都不是很大，所以便利所以立方体便可以得到表面积

## 参考代码

    def surfaceArea(self, grid):
        row=len(grid)
        s=0
        for i in range(row):
            for j in range(len(grid[i])):
                for index in range(grid[i][j]):
                    current=6
                    if(i-1>=0):
                        if(grid[i-1][j]>=index+1):
                            current-=1
                    if(i+1<row):
                        if(grid[i+1][j]>=index+1):
                            current-=1
                    if(j-1>=0):
                        if(grid[i][j-1]>=index+1):
                            current-=1
                    if(j+1<len(grid[i])):
                        if(grid[i][j+1]>=index+1):
                            current-=1
                    if(index>0):
                        current-=1
                    if(index < grid[i][j]-1):
                        current-=1
                    s+=current
        return s
	
    90 / 90 test cases passed.
	Runtime: 496 ms

