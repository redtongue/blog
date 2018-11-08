---
title: 885.Spiral Matrix III
date: 2018-08-13 15:47:11
tags: [code,Math]
categories: leetcode
---
## Description

On a 2 dimensional grid with R rows and C columns, we start at (r0, c0) facing east.

Here, the north-west corner of the grid is at the first row and column, and the south-east corner of the grid is at the last row and column.

Now, we walk in a clockwise spiral shape to visit every position in this grid. 

Whenever we would move outside the boundary of the grid, we continue our walk outside the grid (but may return to the grid boundary later.) 

Eventually, we reach all R * C spaces of the grid.

Return a list of coordinates representing the positions of the grid in the order they were visited.

题目链接：[https://leetcode.com/problems/spiral-matrix-iii/description/](https://leetcode.com/problems/spiral-matrix-iii/description/ "https://leetcode.com/problems/spiral-matrix-iii/description/")

#### Difficulty: medium

<!-- more -->

### Example 1:

	Input: R = 1, C = 4, r0 = 0, c0 = 0
	Output: [[0,0],[0,1],[0,2],[0,3]]
![](https://s3-lc-upload.s3.amazonaws.com/uploads/2018/08/24/example_1.png)

### Example 2:

	Input: R = 5, C = 6, r0 = 1, c0 = 4
	Output: [[1,4],[1,5],[2,5],[2,4],[2,3],[1,3],[0,3],[0,4],[0,5],[3,5],[3,4],[3,3],[3,2],[2,2],[1,2],[0,2],[4,5],[4,4],[4,3],[4,2],[4,1],[3,1],[2,1],[1,1],[0,1],[4,0],[3,0],[2,0],[1,0],[0,0]]
![](https://s3-lc-upload.s3.amazonaws.com/uploads/2018/08/24/example_2.png)
	

### Note:

- 1 <= R <= 100 
- 1 <= C <= 100
- 0 <= r0 < R
- 0 <= c0 < C

## 分析

1. 由例子可知，从给定点开始，分别向有，向下，向左，向上遍历，初始长度为1，每一圈从向左开始增加1，最后得到遍历二维数组的结果；
2. 定义judge判断某一点是否出界，s是当前遍历的长度；
3. 定义index存储遍历得到的总和，用于结束while；
4. 定义li存储当前满足的结果。

## 参考代码

	class Solution:
    def spiralMatrixIII(self, R, C, r0, c0):
        index=1
        li=[]
        s=0
        r,c=r0,c0
        li.append([r,c])
        def judge(x,y):
            if(x>=0 and x<R and y>=0 and y <C):
                return True
            return False
        while(index < R*C):
            s+=1
            for i in range(s):
                c+=1
                if(judge(r,c)):
                    li.append([r,c])
                    index+=1
            for i in range(s):
                r+=1
                if(judge(r,c)):
                    li.append([r,c])
                    index+=1
            s+=1
            for i in range(s):
                c-=1
                if(judge(r,c)):
                    li.append([r,c])
                    index+=1
            for i in range(s):
                r-=1
                if(judge(r,c)):
                    li.append([r,c])
                    index+=1
        return li