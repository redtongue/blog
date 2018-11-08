---
title: 934.Shortest Bridge（最短的桥）
date: 2018-11-06 19:38:45
tags: [code,Depth-first Search,Breadth-first Search]
categories: leetcode
---
## Description

In a given 2D binary array A, there are two islands.  (An island is a 4-directionally connected group of 1s not connected to any other 1s.)

Now, we may change 0s to 1s so as to connect the two islands together to form 1 island.

Return the smallest number of 0s that must be flipped.  (It is guaranteed that the answer is at least 1.)

---

在给定的二维二进制数组 A 中，存在两座岛。（岛是由四面相连的 1 形成的一个最大组。）

现在，我们可以将 0 变为 1，以使两座岛连接起来，变成一座岛。

返回必须翻转的 0 的最小数目。（可以保证答案至少是 1。）

题目链接：[https://leetcode.com/problems/shortest-bridge/](https://leetcode.com/problems/shortest-bridge/ "https://leetcode.com/problems/shortest-bridge/")

#### Difficulty: medium

<!-- more -->

### Example 1:

	Input: [[0,1],[1,0]]
	Output: 1
### Example 2:

	Input: [[0,1,0],[0,0,0],[0,0,1]]
	Output: 2
	
### Example 3:

	Input: [[1,1,1,1,1],[1,0,0,0,1],[1,0,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]
	Output: 1

### Note:

- 1 <= A.length = A[0].length <= 100
- A[i][j] == 0 or A[i][j] == 1

## 分析

1. 每个岛的位置标志都是1，首先将两个岛分开，其中一个岛标1，另外一个标2（上下左右不相连即为两个岛）；
2. 找到一个为1的点作为初始点标为2，存入list，遍历上下左右四个相邻点，若为则加入到list中；
3. 遍历list，重复2（也可以利用队列，每次pop一个元素，我的代码中有index游标遍历list）；
4. 将值为1的点的坐标加到D1中，值为2的点的坐标加到D2中；
5. 直接比较D1和中D2中每个点的距离，返回最小值，时间复杂度为 $O(n^2)$ ,时间会超限；
6. 首先将D1中的点node及其距离d（初始为0）加入到queue中，node放入done中（遍历完的点）；
7. 遍历queue，若node在D2中则返回d（即为最小距离）
8. 反之，将node上下左右相邻四个点中不在done中的点，d+1，加入到queue中；
9. 重复7，8;
10. 因为是多点到多点的最短路径，所以没有采用单点的深度优先遍历。

## 参考代码
	
	class Solution:
    def shortestBridge(self, A):
        row,col=len(A),len(A[0])
        li=[]
        x,y=0,0
        for i in range(row*col):
            if(A[i//col][i%col]==1):
                A[i//col][i%col]=2
                li.append((i//col,i%col))
                x,y=i//col,i%col
                break
        index=0
        while(index<len(li)):
            x,y=li[index]
            if(x-1>=0 and A[x-1][y]==1):
                li.append((x-1,y))
                A[x-1][y]=2
            if(y-1>=0 and A[x][y-1]==1):
                li.append((x,y-1))
                A[x][y-1]=2
            if(x+1<row and A[x+1][y]==1):
                li.append((x+1,y))
                A[x+1][y]=2
            if(y+1<col and A[x][y+1]==1):
                li.append((x,y+1))
                A[x][y+1]=2
            index+=1
        D1=set()
        D2=set()
        for i in range(row):
            for j in range(col):
                if(A[i][j]==1):
                    D1.add((i,j))
                elif(A[i][j]==2):
                    D2.add((i,j))
        done=set(D1)
        queue=[[d,0]for d in D1]
        i=0
        while(len(queue[i:])):
            node,d=queue[i]
            i+=1
            if(node in D2):
                return d-1
            x,y=node
            if(x-1>=0 and (x-1,y) not in done):
                queue.append([(x-1,y),d+1])
                done.add((x-1,y))
            if(y-1>=0 and (x,y-1) not in done):
                queue.append([(x,y-1),d+1])
                done.add((x,y-1))
            if(x+1<row and (x+1,y) not in done):
                queue.append([(x+1,y),d+1])
                done.add((x+1,y))
            if(y+1<col and (x,y+1) not in done):
                queue.append([(x,y+1),d+1])
                done.add((x,y+1))